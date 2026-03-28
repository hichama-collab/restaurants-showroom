#!/usr/bin/env bash
set -euo pipefail

# Generate only human/person photos listed in PHOTO_MAPPING_HUMAINS.csv
# using the OpenAI Images API, without overwriting the original template files.
#
# Usage:
#   export OPENAI_API_KEY="..."
#   chmod +x ./scripts/generate_human_photos.sh
#   ./scripts/generate_human_photos.sh --dry-run
#   ./scripts/generate_human_photos.sh --limit 5
#
# Output:
#   ./generated-humains/<asset_path>

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
CATALOG_DIR="${CATALOG_DIR:-${REPO_ROOT}/catalog}"
CSV_PATH="${CSV_PATH:-${CATALOG_DIR}/PHOTO_MAPPING_HUMAINS.csv}"
OUTPUT_ROOT="${OUTPUT_ROOT:-${REPO_ROOT}/generated-humains}"
MODEL="${MODEL:-gpt-image-1}"
QUALITY="${QUALITY:-medium}"
SIZE="${SIZE:-1024x1024}"
FORCE="${FORCE:-0}"
LIMIT="${LIMIT:-0}"
DRY_RUN="${DRY_RUN:-0}"

usage() {
  cat <<EOF
Usage: ./scripts/generate_human_photos.sh [options]

Options:
  --csv PATH          CSV source file (default: ${CSV_PATH})
  --output-root PATH  Output directory (default: ${OUTPUT_ROOT})
  --model NAME        OpenAI image model (default: ${MODEL})
  --quality LEVEL     Image quality (default: ${QUALITY})
  --size WxH          Image size (default: ${SIZE})
  --limit N           Generate only N images
  --force             Overwrite already generated images
  --dry-run           Print planned generations without calling the API
  -h, --help          Show this help
EOF
}

need_bin() {
  command -v "$1" >/dev/null 2>&1 || {
    echo "Commande manquante: $1" >&2
    exit 1
  }
}

need_env() {
  local var="$1"
  if [ -z "${!var:-}" ]; then
    echo "Variable manquante: $var" >&2
    exit 1
  fi
}

while [ "$#" -gt 0 ]; do
  case "$1" in
    --csv)
      CSV_PATH="$2"
      shift 2
      ;;
    --output-root)
      OUTPUT_ROOT="$2"
      shift 2
      ;;
    --model)
      MODEL="$2"
      shift 2
      ;;
    --quality)
      QUALITY="$2"
      shift 2
      ;;
    --size)
      SIZE="$2"
      shift 2
      ;;
    --limit)
      LIMIT="$2"
      shift 2
      ;;
    --force)
      FORCE="1"
      shift
      ;;
    --dry-run)
      DRY_RUN="1"
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "Option inconnue: $1" >&2
      usage >&2
      exit 1
      ;;
  esac
done

need_bin jq

if [ "$DRY_RUN" != "1" ]; then
  need_bin curl
  need_bin base64
  need_env OPENAI_API_KEY
fi

if [ ! -f "$CSV_PATH" ]; then
  echo "CSV introuvable: $CSV_PATH" >&2
  exit 1
fi

mkdir -p "$OUTPUT_ROOT"

style_for_template() {
  case "$1" in
    "Lounge-1.0.0")
      printf '%s' "quiet premium cafe atmosphere, editorial and refined, warm low-key lighting, upscale Paris coffee lounge"
      ;;
    "burgerking-main")
      printf '%s' "fast casual burger restaurant, urban and commercial, lively but clean lighting, approachable team portrait"
      ;;
    "feane-1.0.0")
      printf '%s' "modern street-food restaurant, energetic casual atmosphere, contemporary urban hospitality"
      ;;
    "feliciano-master")
      printf '%s' "upscale restaurant portrait, elegant hospitality, premium lighting, chic Paris dining room"
      ;;
    "gourmet-master")
      printf '%s' "warm family brasserie, simple and welcoming, natural hospitality portrait"
      ;;
    "pato-master")
      printf '%s' "dark chic cocktail bar or evening restaurant, moody premium lighting, selective atmosphere"
      ;;
    "restaurant-1.0.0")
      printf '%s' "professional hospitality brand portrait, polished and corporate restaurant aesthetic"
      ;;
    "templatemo_507_victory")
      printf '%s' "classic brasserie portrait, simple reassuring atmosphere, traditional restaurant feel"
      ;;
    "yummy-red-1.0.0")
      printf '%s' "bright contemporary restaurant, clean modern hospitality portrait, natural smile"
      ;;
    *)
      printf '%s' "realistic restaurant hospitality portrait, tasteful commercial photography"
      ;;
  esac
}

subject_for_asset() {
  local asset_path="$1"
  local low
  low="$(printf '%s' "$asset_path" | tr '[:upper:]' '[:lower:]')"

  case "$low" in
    *team-*|*chef-*|*cook_*)
      printf '%s' "a professional restaurant team member or chef"
      ;;
    *testimonial*|*avatar*|*client*|*user-*|*person_*)
      printf '%s' "a realistic customer or founder portrait for a restaurant website"
      ;;
    *)
      printf '%s' "a realistic hospitality portrait"
      ;;
  esac
}

prompt_for_row() {
  local template="$1"
  local asset_path="$2"
  local brief="$3"

  local style
  local subject
  style="$(style_for_template "$template")"
  subject="$(subject_for_asset "$asset_path")"

  cat <<EOF
Create a photorealistic commercial website image showing ${subject}.
Match this template vibe: ${style}.
Use this functional brief: ${brief}
The person should look natural, credible, modern, and not like a stock-template cliché.
French market hospitality feel, premium but believable, web-ready composition.
No text, no logo, no watermark, no frame, no collage, no duplicated faces, no deformed hands.
Keep the framing clean and compatible with an existing restaurant website layout.
EOF
}

generate_image() {
  local prompt="$1"
  local output_file="$2"

  local tmp_json
  tmp_json="$(mktemp)"

  jq -n \
    --arg model "$MODEL" \
    --arg prompt "$prompt" \
    --arg size "$SIZE" \
    --arg quality "$QUALITY" \
    --arg output_format "png" \
    '{
      model: $model,
      prompt: $prompt,
      size: $size,
      quality: $quality,
      output_format: $output_format
    }' > "$tmp_json"

  local response_file
  response_file="$(mktemp)"

  curl -sS https://api.openai.com/v1/images/generations \
    -H "Authorization: Bearer ${OPENAI_API_KEY}" \
    -H "Content-Type: application/json" \
    -d @"$tmp_json" > "$response_file"

  jq -e '.data[0].b64_json' "$response_file" >/dev/null
  jq -r '.data[0].b64_json' "$response_file" | base64 -d > "$output_file"

  rm -f "$tmp_json" "$response_file"
}

row_count=0
generated_count=0
skipped_count=0
dry_run_count=0

{
  IFS= read -r header
  while IFS=';' read -r template asset_path filename category action variant brief_fr used_in_files used_in_count; do
    row_count=$((row_count + 1))

    if [ "$LIMIT" -gt 0 ] && [ $((generated_count + dry_run_count)) -ge "$LIMIT" ]; then
      break
    fi

    output_file="${OUTPUT_ROOT}/${asset_path}"
    output_dir="$(dirname "$output_file")"
    mkdir -p "$output_dir"

    if [ -f "$output_file" ] && [ "$FORCE" != "1" ]; then
      echo "Skip existing: ${asset_path}"
      skipped_count=$((skipped_count + 1))
      continue
    fi

    prompt="$(prompt_for_row "$template" "$asset_path" "$brief_fr")"

    if [ "$DRY_RUN" = "1" ]; then
      echo "Dry run: ${asset_path}"
      dry_run_count=$((dry_run_count + 1))
      continue
    fi

    echo "Generating: ${asset_path}"
    generate_image "$prompt" "$output_file"

    generated_count=$((generated_count + 1))
  done
} < "$CSV_PATH"

echo
echo "Termine."
echo "CSV lu        : $CSV_PATH"
echo "Sortie        : $OUTPUT_ROOT"
echo "Lignes lues   : $row_count"
echo "Generees      : $generated_count"
echo "Ignorees      : $skipped_count"
echo "Dry run       : $dry_run_count"

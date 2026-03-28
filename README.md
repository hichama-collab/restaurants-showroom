# restaurants-showroom

Repo local du showroom commercial `Ma Vitrine Online` pour les templates restaurants.

## Structure

- `catalog/`
  showroom migre, demos et variantes `Model 1` a `Model 11`
- `assets-source/`
  sources images, logos, exports
- `generated-humains/`
  futures images remplacees pour les visuels humains
- `scripts/`
  scripts utilitaires de generation et de migration

## Objectif

Centraliser dans un repo dedie :

- les demos showroom
- les templates neutralises
- les mappings images
- les scripts de preparation commerciale

## Etat actuel

- le showroom a ete copie dans `catalog/`
- les mappings images sont dans `catalog/`
- le script de generation humain est dans `scripts/generate_human_photos.sh`
- le dossier `template/` a la racine de `/mnt/data/restaurants` peut rester comme copie de travail / backup tant qu'on n'a pas pousse le repo

## Commandes utiles

Lancer le showroom localement :

```bash
cd /mnt/data/restaurants/restaurants-showroom
./catalog/start.sh
```

Verifier les images humaines a generer sans appeler l'API :

```bash
cd /mnt/data/restaurants/restaurants-showroom
./scripts/generate_human_photos.sh --dry-run
```

Generer les images humaines plus tard, si une cle API est disponible :

```bash
cd /mnt/data/restaurants/restaurants-showroom
export OPENAI_API_KEY="..."
./scripts/generate_human_photos.sh --limit 5
```

## Repo cible

- `hichama-collab/restaurants-showroom`

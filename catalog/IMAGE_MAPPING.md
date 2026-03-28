# Mapping images showroom
Fichiers generes pour remplacer les visuels en gardant exactement le meme chemin et le meme nom de fichier.
## Fichiers
- `PHOTO_MAPPING.csv`: uniquement les visuels a regenerer avec ton script photo.
- `IMAGE_MAPPING.csv`: inventaire complet des assets references, avec colonne `action`.

## Totaux
- Total assets references: 441
- A regenerer: 381
- Optionnels: 30
- A ignorer: 29
- A garder: 1

## Par template
| Template | A regenerer | Optionnels | Ignorer | Garder |
| --- | ---: | ---: | ---: | ---: |
| Lounge-1.0.0 | 37 | 6 | 0 | 0 |
| burgerking-main | 34 | 0 | 2 | 0 |
| delicious-master | 46 | 1 | 3 | 0 |
| feane-1.0.0 | 15 | 1 | 0 | 0 |
| feliciano-master | 66 | 0 | 4 | 0 |
| gourmet-master | 11 | 1 | 3 | 0 |
| grandcoffee-master | 12 | 5 | 0 | 0 |
| pato-master | 91 | 11 | 15 | 0 |
| restaurant-1.0.0 | 14 | 1 | 0 | 0 |
| shared | 0 | 0 | 0 | 1 |
| templatemo_507_victory | 25 | 0 | 2 | 0 |
| yummy-red-1.0.0 | 30 | 4 | 0 | 0 |

## Comment t en servir
1. Genere les fichiers listes dans `PHOTO_MAPPING.csv`.
2. Remets chaque image exactement au meme `asset_path`.
3. Si tu veux aussi changer logos ou favicons, regarde `IMAGE_MAPPING.csv` et prends les lignes `optionnel`.

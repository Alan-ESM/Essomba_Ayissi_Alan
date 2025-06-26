# Essomba_Ayissi_Alan
# Gestion de Projet avec Git

## Stratégie de Branchement

### Branches Principales
- **main** : Version stable et déployée  
- **dev** : Branche d'intégration principale  

### Branches SpécialiséeS
- **feature** : Développement de nouvelles fonctionnalités  
- **test** : Tests expérimentaux    

## Workflow de Développement

### 1. Initialisation
```bash
## git clone  git@github.com:Alan-ESM/Essomba_Ayissi_Alan.git
## git checkout dev
2. Création d'une branche de travail
bash
git checkout -b feature/ma-nouvelle-fonction
3. Développement quotidien
bash
# Ajouter les modifications
git add .

# Valider les changements
git commit -m "Description claire des modifications"

# Synchroniser avec le dépôt distant
git push -u origin feature*
4. Fusion des modifications
Créer une Pull Request sur GitHub/GitLab

Résoudre les éventuels conflits

Fusionner dans dev après validation

5. Mise en production
bash
git checkout main
git merge dev
git push origin main

Commandes Utiles

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:Alan-ESM/Essomba_Ayissi_Alan.git
git push -u origin main

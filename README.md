# Projet de test CI/CD

Ce repo contient les exercices du cours CI/CD de Mathieu Campani.

## Exercice 1 — Valider un projet

Workflow : `.github/workflows/ci.yml`

Déclencheur : `push`

Étapes :

- checkout du code
- setup Node.js 20
- installation des dépendances (`npm ci`)
- exécution des tests (`npm test`)
- écriture du statut et de la ref du commit dans `$GITHUB_STEP_SUMMARY`

## Exercice 2 — Produire un artefact

Workflow : `.github/workflows/build-artifact.yml`

Déclencheur : `workflow_dispatch` (manuel)

Étapes :

- checkout du code
- setup Node.js 20 avec cache npm
- installation des dépendances (`npm ci`)
- build du projet (`npm run build`) qui produit `dist/bundle.js`
- vérification que `dist/bundle.js` existe
- upload de `dist/` comme artefact
- écriture d'un résumé du build

## Exercice 3 — Construire, tester et déployer

Workflow : `.github/workflows/build-test-deploy.yml`

Déclencheur : `workflow_dispatch` avec choix entre `staging` et `production`

Étapes :

- construction unique de `dist/` et publication de l'artefact `application`
- tests du même artefact sur Node.js 20 et 22, sous Ubuntu et Windows
- exécution de deux variantes au maximum en parallèle
- déploiement vers l'Environment choisi après la réussite de tous les tests
- affichage de `API_URL` et écriture du résumé de déploiement

Configuration GitHub requise :

- Environment `staging` avec `API_URL=https://api-staging.example.com`
- Environment `production` avec `API_URL=https://api.example.com` et approbation obligatoire

## Scripts disponibles

```bash
npm test       # lance les tests
npm run build  # génère dist/bundle.js
```

## Fichiers importants

- `src/index.js` : code source
- `build.js` : script de build
- `test.js` : tests basiques
- `package.json` / `package-lock.json` : configuration Node.js

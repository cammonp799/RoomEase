# Architecture logicielle de RoomEase

RoomEase est structuré selon une architecture en couches et modulaire, facilitant la séparation des responsabilités et la maintenabilité du code.

## Structure du projet

```
RoomEase/
├─ frontend/            # Application Angular (UI)
│   ├─ src/             # Code source Angular
│   ├─ e2e/             # Tests end-to-end avec Playwright/Cypress
│   ├─ Dockerfile       # Image Docker du frontend
│   └─ package.json     # Dépendances et scripts npm
├─ backend/             # API (Node.js)
│   ├─ Dockerfile       # Image Docker du backend
│   ├─ .env.*           # Variables d’environnement par environnement
├─ .github/workflows/   # CI/CD avec GitHub Actions
│   ├─ ci.yml           # Lint, test, build à chaque push
│   └─ deploy.yml       # Déploiement automatique
├─ infra/               # Infrastructure-as-Code
│   ├─ terraform/       # Provisionnement cloud
│   └─ k8s/             # Déploiement Kubernetes
├─ docs/                # Documentation du projet
│   ├─ architecture.md  # Présente l'architecture logicielle 
│   └─ api_spec.md      # Spécifications de l'API
├─ docker-compose.yml   # Déploiement local multi-services
└─ README.md            # Présentation générale
```

## Principes clés

* **Séparation des responsabilités** : le frontend, le backend, l’infrastructure et la documentation sont bien isolés.
* **CI/CD intégré** : tests et déploiements automatisés avec GitHub Actions.
* **Environnements multiples** : développement, staging, production gérés avec des fichiers `.env`.
* **Conteneurisation** : chaque service est dockerisé pour simplifier le déploiement.
* **Scalabilité** : le déploiement Kubernetes permet une montée en charge facile.

Cette architecture permet un développement collaboratif, des tests automatisés, et une mise en production fiable et reproductible.

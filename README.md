# 🏦 ARGENT BANK

Projet réalisé avec React et Vite

## 🔑 PHASE 1 - Connexion utilisateur

Les utilisateurs peuvent se connecter à l’application en utilisant les identifiants suivants :

|  👤 Utilisateur     |     ✉️ Email       |    🔑 Mot de passe |
|---------------------|---------------------|---------------------|
| **Tony Stark**      | `tony@stark.com`    | `password123`       |
| **Steve Rogers**    | `steve@rogers.com`  | `password456`       |

---

## 📑 PHASE 2 - Documentation API (Swagger)

Un fichier **Swagger** (`transactions-api.yaml`) décrit les futurs endpoints pour la gestion des transactions avec l'URL <http://localhost:3001/api/v1>.

### 🚀 **Liste des Endpoints :**

| Méthode | Endpoint        | Description                                                              |
|---------|-----------------|--------------------------------------------------------------------------|
| **GET** | `/transactions` | *Récupérer les transactions du mois en cours (groupées par compte)*      |
| **POST**| `/transactions` | *Ajouter une nouvelle transaction*                                       |
| **GET** | `/transactions/{transactionId}` | *Récupérer les détails d’une transaction*                |
| **PUT** | `/transactions/{transactionId}` | *Modifier la catégorie ou la note d’une transaction*     |
| **DELETE**| `/transactions/{transactionId}` | *Supprimer une transaction*                            |
| **DELETE**| `/transactions/{transactionId}/note` | *Supprimer uniquement la note d’une transaction*  |

📌 *Le backend n’étant pas encore implémenté, ces endpoints sont uniquement documentés pour le moment.*

---

## 📂 **Fichier Swagger**

- **Fichier** : `transactions-api.yaml`
- **Dossier** : `docs/`

### 📌 **Comment visualiser la documentation API ?**

**Via Swagger Editor** : Ouvrir [Swagger Editor](https://editor.swagger.io/) et importer `transactions-api.yaml`.

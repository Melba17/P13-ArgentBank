// Ce fichier envoie des requêtes HTTP POST à l'API pour inscrire des utilisateurs.
// Il utilise la bibliothèque `axios` pour faire des requêtes à l'URL de l'API `signupApi`.
// Le tableau `users` contient les informations de plusieurs utilisateurs à inscrire.
// La fonction `forEach` parcourt chaque utilisateur du tableau et envoie une requête POST à l'API pour chaque utilisateur.
// Si l'inscription est réussie, la réponse est affichée dans la console, sinon une erreur est affichée.
const axios = require('axios')
const signupApi = 'http://localhost:3001/api/v1/user/signup'

const users = [
  {
    firstName: 'Tony',
    lastName: 'Stark',
    email: 'tony@stark.com',
    password: 'password123'
  },
  {
    firstName: 'Steve',
    lastName: 'Rogers',
    email: 'steve@rogers.com',
    password: 'password456'
  }
]

users.forEach(user => {
  axios
    .post(signupApi, user)
    .then(response => console.log(response))
    .catch(error => console.log(error))
})

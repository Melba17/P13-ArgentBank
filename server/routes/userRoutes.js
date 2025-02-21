// Ce fichier définit les routes liées aux utilisateurs pour l'application.
// Il utilise Express Router pour gérer les différentes requêtes HTTP.
// - `POST /signup`: Appelle la méthode `createUser` du contrôleur `userController` pour créer un nouvel utilisateur.
// - `POST /login`: Appelle la méthode `loginUser` du contrôleur `userController` pour connecter un utilisateur.
// - `POST /profile`: Appelle la méthode `getUserProfile` du contrôleur `userController` pour récupérer le profil de l'utilisateur,
//   après avoir validé le token JWT grâce au middleware `tokenValidation`.
// - `PUT /profile`: Appelle la méthode `updateUserProfile` du contrôleur `userController` pour mettre à jour le profil de l'utilisateur,
//   après avoir validé le token JWT grâce au middleware `tokenValidation`.
// Les routes nécessitant une authentification utilisent le middleware `tokenValidation` pour vérifier la validité du token JWT.
const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const tokenValidation = require('../middleware/tokenValidation')

router.post('/signup', userController.createUser)

router.post('/login', userController.loginUser)

router.post(
  '/profile',
  tokenValidation.validateToken,
  userController.getUserProfile
)

router.put(
  '/profile',
  tokenValidation.validateToken,
  userController.updateUserProfile
)

module.exports = router

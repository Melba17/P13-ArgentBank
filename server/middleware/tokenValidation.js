// Ce fichier contient une fonction middleware pour valider les tokens JWT.
// La fonction `validateToken` vérifie si un token est présent dans l'en-tête `Authorization` de la requête.
// Si le token est absent ou invalide, une erreur est renvoyée avec un message et un code de statut 401 (Non autorisé).
// Si le token est valide, il est décodé à l'aide de la clé secrète, et la requête passe au middleware suivant en appelant `next()`.
// Le fichier utilise le module `jsonwebtoken` pour vérifier et décoder le token.
const jwt = require('jsonwebtoken')
const { restart } = require('nodemon')

module.exports.validateToken = (req, res, next) => {
  let response = {}

  try {
    if (!req.headers.authorization) {
      throw new Error('Token is missing from header')
    }

    const userToken = req.headers.authorization.split('Bearer')[1].trim()
    const decodedToken = jwt.verify(
      userToken,
      process.env.SECRET_KEY || 'default-secret-key'
    )
    return next()
  } catch (error) {
    console.error('Error in tokenValidation.js', error)
    response.status = 401
    response.message = error.message
  }

  return res.status(response.status).send(response)
}

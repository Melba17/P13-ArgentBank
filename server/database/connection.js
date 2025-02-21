// Ce fichier configure la connexion à la base de données MongoDB à l'aide de Mongoose.
// L'URL de la base de données est récupérée depuis la variable d'environnement `DATABASE_URL` ou par défaut sur `mongodb://localhost/argentBankDB`.
// Une fonction asynchrone est utilisée pour se connecter à la base de données.
// Si la connexion réussit, un message de succès est affiché dans la console.
// En cas d'échec de la connexion, une erreur est capturée et un message d'erreur est affiché.
const mongoose = require('mongoose')
const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://localhost/argentBankDB'

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}

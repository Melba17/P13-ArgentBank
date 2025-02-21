// Ce fichier configure et lance le serveur Express pour l'application.
// - Il charge les variables d'environnement via `dotenv`.
// - Il se connecte à la base de données en appelant la fonction `dbConnection`.
// - Il configure CORS pour permettre des requêtes cross-origin avec `cors()`.
// - Il ajoute des middlewares pour parser les données JSON et les URL-encoded.
// - Il configure les routes d'API sous `/api/v1/user` en utilisant `userRoutes`.
// - Il sert la documentation Swagger via `swagger-ui-express` si l'environnement n'est pas en production.
// - Il définit une route de base (`/`) qui renvoie un message simple.
// - Enfin, il lance le serveur sur un port spécifié (3001 par défaut).
const express = require('express')
const dotEnv = require('dotenv')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const yaml = require('yamljs')
const swaggerDocs = yaml.load('./swagger.yaml')
const dbConnection = require('./database/connection')

dotEnv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Connect to the database
dbConnection()

// Handle CORS issues
app.use(cors())

// Request payload middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Handle custom routes
app.use('/api/v1/user', require('./routes/userRoutes'))

// API Documentation
if (process.env.NODE_ENV !== 'production') {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}

app.get('/', (req, res, next) => {
  res.send('Hello from my Express server v2!')
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})

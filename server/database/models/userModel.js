// Ce fichier définit le schéma Mongoose pour le modèle `User`.
// Il contient les champs de l'utilisateur : email, mot de passe, prénom, et nom de famille.
// Le schéma inclut également des options pour la gestion des timestamps (création et mise à jour automatique des dates).
// Lors de la transformation de l'objet en JSON (par exemple, pour l'envoi de données via une API),
// l'_id est transformé en `id`, et les champs `_id`, `password`, et `__v` sont supprimés pour des raisons de sécurité.
// Enfin, le schéma est utilisé pour créer et gérer le modèle `User` dans MongoDB.
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
    firstName: String,
    lastName: String
  },
  {
    timestamps: true,
    toObject: {
      transform: (doc, ret, options) => {
        ret.id = ret._id
        delete ret._id
        delete ret.password
        delete ret.__v
        return ret
      }
    }
  }
)

module.exports = mongoose.model('User', userSchema)

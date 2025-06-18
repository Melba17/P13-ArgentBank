import axios from 'axios';

// 🔹 Utilise l'URL d'API définie dans les variables d'environnement (Vercel),
// sinon utilise l'URL locale par défaut pour le développement en local.
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api/v1';

/**
 * 🔹 Connexion de l'utilisateur
 * Utilise `POST` pour envoyer les identifiants en toute sécurité dans le `body` de la requête.
 * Une fois connecté, le token est stocké globalement pour être utilisé dans toutes les requêtes suivantes.
 * 
 * @param {string} email - L'email de l'utilisateur.
 * @param {string} password - Le mot de passe de l'utilisateur.
 * @returns {Promise<Object>} - Un objet contenant le token JWT.
 */
export const loginUser = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  // 🔹 On stocke le token dans Axios pour les futures requêtes
  axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.body.token}`;

  return response.data.body; // 🔹 Retourne l'objet `body` qui contient le token 
};

/**
 * 🔹 Récupération du profil utilisateur.
 * Le token est maintenant ajouté automatiquement grâce à `axios.defaults.headers.common`.
 *
 * @returns {Promise<Object>} - Un objet contenant les informations du profil utilisateur (email, prénom, nom, etc.).
 */
export const getUserProfile = async () => {
  const response = await axios.post(`${API_URL}/profile`);
  return response.data.body;
};

/**
 * 🔹 Mise à jour du profil utilisateur
 * Utilise `PUT` pour modifier les informations du profil dans la base de données.
 * 
 * @param {string} firstName - Le nouveau prénom de l'utilisateur.
 * @param {string} lastName - Le nouveau nom de famille de l'utilisateur.
 * @returns {Promise<Object>} - Les informations mises à jour du profil utilisateur.
 */
export const updateUserProfile = async (firstName, lastName) => {
  const response = await axios.put(`${API_URL}/profile`, { firstName, lastName });
  return response.data.body;
};

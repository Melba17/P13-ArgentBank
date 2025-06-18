import axios from 'axios';

// 🔹 Utilise l'URL d'API définie dans les variables d'environnement (Vercel),
// sinon utilise l'URL locale par défaut pour le développement en local.
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api/v1';

/**
 * 🔹 Connexion de l'utilisateur
 */
export const loginUser = async (email, password) => {
  const response = await axios.post(
    `${API_URL}/user/login`,
    { email, password },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.body.token}`;
  return response.data.body;
};


/**
 * 🔹 Récupération du profil utilisateur
 */
export const getUserProfile = async () => {
  const response = await axios.post(`${API_URL}/user/profile`); // ← Ajout /user
  return response.data.body;
};

/**
 * 🔹 Mise à jour du profil utilisateur
 */
export const updateUserProfile = async (firstName, lastName) => {
  const response = await axios.put(`${API_URL}/user/profile`, { firstName, lastName }); // ← Ajout /user
  return response.data.body;
};

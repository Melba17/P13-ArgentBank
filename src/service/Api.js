import axios from 'axios';

// 🔹 Utilise l'URL d'API définie dans les variables d'environnement (Vercel),
// sinon utilise l'URL locale par défaut pour le développement en local.
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api/v1';

/**
 * 🔹 Connexion de l'utilisateur
 */
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(
      `${API_URL}/user/login`,
      { email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const token = response?.data?.body?.token;

    if (!token) {
      throw new Error('Token manquant dans la réponse');
    }

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return response.data.body;

  } catch (error) {
    console.error('❌ Erreur lors de la connexion :', error);

    // Gestion spécifique pour les erreurs du backend
    if (error.response) {
      throw new Error(error.response.data.message || 'Erreur serveur');
    } else {
      throw new Error('Connexion impossible au serveur');
    }
  }
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

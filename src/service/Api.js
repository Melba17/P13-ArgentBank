import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1';

const mockUsers = [
  {
    email: 'tony@stark.com',
    password: 'password123',
    firstName: 'Tony',
    lastName: 'Stark',
    token: 'fake-token-tony'
  },
  {
    email: 'steve@rogers.com',
    password: 'password456',
    firstName: 'Steve',
    lastName: 'Rogers',
    token: 'fake-token-steve'
  }
];

// Mode démo : true si Vercel, false en local
const isDemo = import.meta.env.MODE === 'production';

/**
 * 🔹 Connexion de l'utilisateur
 */
export const loginUser = async (email, password) => {
  if (isDemo) {
    const user = mockUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      throw new Error('Identifiants invalides');
    }

    axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
    return {
      token: user.token,
      firstName: user.firstName,
      lastName: user.lastName,
    };
  }

  // sinon (mode local)
  try {
    const response = await axios.post(
      `${API_URL}/user/login`,
      { email, password },
      { headers: { 'Content-Type': 'application/json' } }
    );

    const token = response?.data?.body?.token;
    if (!token) throw new Error('Token manquant dans la réponse');

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return response.data.body;

  } catch (error) {
    console.error('❌ Erreur lors de la connexion :', error);
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
  if (isDemo) {
    const token = axios.defaults.headers.common['Authorization']?.split(' ')[1];
    const user = mockUsers.find((u) => u.token === token);

    if (!user) throw new Error('Token invalide');
    return { firstName: user.firstName, lastName: user.lastName };
  }

  const response = await axios.post(`${API_URL}/user/profile`);
  return response.data.body;
};

/**
 * 🔹 Mise à jour du profil utilisateur
 */
export const updateUserProfile = async (firstName, lastName) => {
  if (isDemo) {
    const token = axios.defaults.headers.common['Authorization']?.split(' ')[1];
    const user = mockUsers.find((u) => u.token === token);

    if (!user) throw new Error('Token invalide');
    user.firstName = firstName;
    user.lastName = lastName;

    return { firstName, lastName };
  }

  const response = await axios.put(`${API_URL}/user/profile`, { firstName, lastName });
  return response.data.body;
};

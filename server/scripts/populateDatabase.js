const axios = require('axios');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../server/database/models/userModel'); // adapte le chemin si besoin
require('dotenv').config();

const users = [
  {
    firstName: 'Tony',
    lastName: 'Stark',
    email: 'tony@stark.com',
    password: 'password123',
  },
  {
    firstName: 'Steve',
    lastName: 'Rogers',
    email: 'steve@rogers.com',
    password: 'password456',
  },
];

const isLocal = process.env.DATABASE_URL.includes('localhost');

async function populate() {
  if (isLocal) {
    // En local : requêtes HTTP vers le backend local
    const signupApi = 'http://localhost:3001/api/v1/user/signup';
    users.forEach(user => {
      axios
        .post(signupApi, user)
        .then(response => console.log('User added locally:', response.data))
        .catch(error => console.error('Error locally:', error.response?.data || error.message));
    });
  } else {
    // En production : insertion directe dans Atlas (donc hash)
    try {
      await mongoose.connect(process.env.DATABASE_URL);
      console.log('Connected to MongoDB Atlas');

      // Nettoyer l'ancienne collection
      await User.deleteMany({});

      // Hasher les mots de passe avant insertion
      const hashedUsers = [];
      for (const user of users) {
        const hashedPassword = await bcrypt.hash(user.password, 12);
        hashedUsers.push({ ...user, password: hashedPassword });
      }

      await User.insertMany(hashedUsers);
      console.log('Users inserted into Atlas');

      process.exit(0);
    } catch (error) {
      console.error('Error in populate:', error);
      process.exit(1);
    }
  }
}

populate();

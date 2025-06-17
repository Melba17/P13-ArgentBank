const axios = require('axios');
const mongoose = require('mongoose');
const User = require('../database/models/userModel');
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

// Détermine si on est en local (backend) ou production (Atlas)
const isLocal = process.env.DATABASE_URL.includes('localhost');

async function populate() {
  if (isLocal) {
    // En local : envoie les requêtes HTTP vers backend local
    const signupApi = 'http://localhost:3001/api/v1/user/signup';
    for (const user of users) {
      try {
        const response = await axios.post(signupApi, user);
        console.log('User added locally:', response.data);
      } catch (error) {
        console.error('Error adding user locally:', error.response?.data || error.message);
      }
    }
    process.exit(0);
  } else {
    // En prod (Atlas) : connecte-toi directement à la base et insère les utilisateurs
    try {
      await mongoose.connect(process.env.DATABASE_URL);
      console.log('Connected to MongoDB Atlas');

      await User.deleteMany({});
      await User.insertMany(users);
      console.log('Users inserted into Atlas');

      process.exit(0);
    } catch (error) {
      console.error('Error populating Atlas:', error);
      process.exit(1);
    }
  }
}

populate();

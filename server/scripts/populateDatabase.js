const axios = require('axios');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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

const isLocal = process.env.DATABASE_URL.includes('localhost');


async function populate() {
  if (isLocal) {
    const signupApi = 'http://localhost:3001/api/v1/user/signup';
    for (const user of users) {
  try {
    const response = await axios.post(signupApi, user);
    console.log('✅ User added locally:', response.data);
  } catch (error) {
    console.error('❌ Error adding user locally:');
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    } else {
      console.error('Message:', error.message);
    }
  }
}
    process.exit(0);
  } else {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log('Connected to MongoDB Atlas');

    await User.deleteMany({});

    // 🔐 Hachage des mots de passe AVANT insertion
    const hashedUsers = [];
    for (const user of users) {
      const hashedPassword = await bcrypt.hash(user.password, 12);
      hashedUsers.push({ ...user, password: hashedPassword });
    }

    await User.insertMany(hashedUsers);
    console.log('Users inserted into Atlas');

    process.exit(0);
  } catch (error) {
    console.error('Error populating Atlas:', error);
    process.exit(1);
  }
}
}

populate();

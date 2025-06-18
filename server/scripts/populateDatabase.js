const axios = require('axios');

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

async function populate() {
  const signupApi = 'http://localhost:3001/api/v1/user/signup';

  for (const user of users) {
    try {
      const response = await axios.post(signupApi, user, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('✅ User added locally:', response.data);
    } catch (error) {
      console.error('❌ Error adding user locally:');
      console.error('Message:', error.response?.data || error.message);
    }
  }

  process.exit(0);
}

populate();

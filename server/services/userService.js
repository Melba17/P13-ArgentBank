const User = require('../database/models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports.createUser = async serviceData => {
  try {
    const user = await User.findOne({ email: serviceData.email })
    if (user) {
      throw new Error('Email already exists')
    }

    const hashPassword = await bcrypt.hash(serviceData.password, 12)

    const newUser = new User({
      email: serviceData.email,
      password: hashPassword,
      firstName: serviceData.firstName,
      lastName: serviceData.lastName
    })

    let result = await newUser.save()

    return result
  } catch (error) {
    console.error('Error in userService.js', error)
    throw new Error(error)
  }
}

module.exports.getUserProfile = async serviceData => {
  try {
    const jwtToken = serviceData.headers.authorization.split('Bearer')[1].trim()
    const decodedJwtToken = jwt.decode(jwtToken)
    const user = await User.findOne({ _id: decodedJwtToken.id })

    if (!user) {
      throw new Error('User not found!')
    }

    return user.toObject()
  } catch (error) {
    console.error('Error in userService.js', error)
    throw new Error(error)
  }
}

module.exports.loginUser = async (serviceData) => {
  try {
    // Vérifie que l'email est fourni
    if (!serviceData.email || !serviceData.password) {
      throw new Error('Email and password are required');
    }

    // Recherche l'utilisateur par email
    const user = await User.findOne({ email: serviceData.email });

    if (!user) {
      console.error('❌ Email not found:', serviceData.email);
      throw new Error('User not found!');
    }

    // Vérifie le mot de passe
    const isValidPassword = await bcrypt.compare(serviceData.password, user.password);

    if (!isValidPassword) {
      console.error('❌ Invalid password for email:', serviceData.email);
      throw new Error('Password is invalid');
    }

    // Génère un token JWT
    const token = jwt.sign(
      { id: user._id },
      process.env.SECRET_KEY || 'default-secret-key',
      { expiresIn: '1d' }
    );

    // Retourne le token
    return { token };
  } catch (error) {
    console.error('❌ Error in loginUser (userService.js):', error.message);
    throw new Error(error.message || 'Internal server error');
  }
};

module.exports.updateUserProfile = async serviceData => {
  try {
    const jwtToken = serviceData.headers.authorization.split('Bearer')[1].trim()
    const decodedJwtToken = jwt.decode(jwtToken)
    const user = await User.findOneAndUpdate(
      { _id: decodedJwtToken.id },
      {
        firstName: serviceData.body.firstName,
        lastName: serviceData.body.lastName
      },
      { new: true }
    )

    if (!user) {
      throw new Error('User not found!')
    }

    return user.toObject()
  } catch (error) {
    console.error('Error in userService.js', error)
    throw new Error(error)
  }
}

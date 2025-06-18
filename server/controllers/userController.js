const userService = require('../services/userService');

module.exports.createUser = async (req, res) => {
  try {
    const result = await userService.createUser(req.body);
    return res.status(200).send({
      status: 200,
      message: 'User successfully created',
      body: result,
    });
  } catch (error) {
    console.error('❌ createUser error:', error.message);
    return res.status(400).send({
      status: 400,
      message: error.message,
    });
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    const result = await userService.loginUser(req.body);
    return res.status(200).send({
      status: 200,
      message: 'User successfully logged in',
      body: result,
    });
  } catch (error) {
    console.error('❌ loginUser error:', error.message);
    return res.status(400).send({
      status: 400,
      message: error.message,
    });
  }
};

module.exports.getUserProfile = async (req, res) => {
  try {
    const result = await userService.getUserProfile(req);
    return res.status(200).send({
      status: 200,
      message: 'Successfully got user profile data',
      body: result,
    });
  } catch (error) {
    console.error('❌ getUserProfile error:', error.message);
    return res.status(400).send({
      status: 400,
      message: error.message,
    });
  }
};

module.exports.updateUserProfile = async (req, res) => {
  try {
    const result = await userService.updateUserProfile(req);
    return res.status(200).send({
      status: 200,
      message: 'Successfully updated user profile data',
      body: result,
    });
  } catch (error) {
    console.error('❌ updateUserProfile error:', error.message);
    return res.status(400).send({
      status: 400,
      message: error.message,
    });
  }
};

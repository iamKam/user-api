// backend/controllers/authController.js
const { isValidObjectId } = require('mongoose');
const User = require('../models/User');

exports.getUser = async (req, res) => {
  try {
    const { id } = req.params;
    console.log({id});

    // Check if the id is valid objectID
    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: 'Invalid user id' });
    }

    // Look up the user
    const user = await User.findOne({ _id: id, age: { $gt: 21 } });
    if (!user) {
      return res.status(404).json({ message: 'User not found!' });
    }
    // Compare provided password with hashed password
    res.json(user)
  } catch (error) {
    res.status(500).json({ message: 'Error getting user ', error });
  }
};
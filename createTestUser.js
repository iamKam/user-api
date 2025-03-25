const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/User');

const createUser = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const testUser = {
      name: "Test user",
      email: "testuser@mail.com",
      age: 30
    }
    const newUser = new User(testUser);
    await newUser.save();
    console.log('Test user created successfully');
    mongoose.disconnect();
  } catch (error) {
    console.error('Error creating user:', error);
  }
};

createUser();

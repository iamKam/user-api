const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  age: { type: Number, required: false }
});

module.exports = mongoose.model('User', UserSchema);

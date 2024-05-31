const mongoose = require('../config/moogose');

const userSchema = new mongoose.Schema({
  last_name: { type: String, required: true },
  first_name: { type: String, required: true },
  phone : { type: String, required: true },
  email : { type: String, required: true },
  password: { type: String, required: true },
  admin: { type: Boolean, default: false },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
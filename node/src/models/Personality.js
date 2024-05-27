const mongoose = require('../config/moogose');

const personalitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description : { type: String, required: true },
});

const Personality = mongoose.model('Personality', personalitySchema);

module.exports = Personality;
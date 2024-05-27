const mongoose = require('../config/moogose');

const responseSchema = new mongoose.Schema({
  id_user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  id_link: { type: String, required: true, unique: true },
  id_personality: { type: mongoose.Schema.Types.ObjectId, ref: 'Personality', required: false },
  statistique: { type: String, required: false },
  status: { type: String, required: true },
  date: { type: String, required: true },
  content: { type: String, required: false },
});

const Response = mongoose.model('Response', responseSchema);

module.exports = Response;
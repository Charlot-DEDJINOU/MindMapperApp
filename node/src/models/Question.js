const mongoose = require('../config/moogose');

const questionSchema = new mongoose.Schema({
  identifiant: { type: String, required: true },
  content : { type: String, required: true },
});

const Question = mongoose.model('Question',questionSchema);

module.exports = Question;
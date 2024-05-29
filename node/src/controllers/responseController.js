const { v4: uuidv4 } = require('uuid');
const moment = require('moment');
const Response = require('../models/Response');

exports.create = async (req, res) => {
  try {
    const { id_user } = req.body;

    if (!id_user) {
      return res.status(400).json({ message: 'User ID is required' });
    }

    const currentDate = moment().format('YYYY-MM-DD HH:mm:ss');
    const status = 'PENDING';
    const id_link = uuidv4();

    const newResponse = new Response({
      id_user,
      id_link,
      status,
      date: currentDate,
    });

    const savedResponse = await newResponse.save();
    res.status(201).json({ message: 'Response created successfully', response: savedResponse });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { id_link, status, content } = req.body;

    const response = await Response.findOne({ id_link });
    if (!response) {
      return res.status(404).json({ message: 'Response not found' });
    }

    if (content) {
      const sortedContent = {};
      Object.keys(content).sort().forEach(key => {
        sortedContent[key] = content[key];
      });
      response.content = JSON.stringify(sortedContent);
    }

    response.status = status || response.status;

    if (status === 'COMPLETED' && content) {
      const stats = {};
      const letters = [...new Set(Object.keys(content).map(key => key[0]))];

      letters.forEach(letter => {
        const totalKeys = Object.keys(content).filter(key => key.startsWith(letter)).length;
        const trueKeys = Object.keys(content).filter(key => key.startsWith(letter) && content[key] === true).length;
        stats[letter] = `${trueKeys}/${totalKeys}`;
      });

      response.statistique = JSON.stringify(stats);
    }

    const updatedResponse = await response.save();
    res.status(200).json({ message: 'Response updated successfully', response: updatedResponse });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePersonality = async (req, res) => {
  try {
    const { id_link, id_personality } = req.body;

    const response = await Response.findOne({ id_link });
    if (!response) {
      return res.status(404).json({ message: 'Response not found' });
    }

    response.id_personality = id_personality || response.id_personality;

    const updatedResponse = await response.save();
    res.status(200).json({ message: 'Personality updated successfully', response: updatedResponse });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.responses = async (req, res) => {
  try {
    const responses = await Response.find().populate('id_user').populate('id_personality');
    res.status(200).json({ responses });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.response = async (req, res) => {
  try {
    const { id_link } = req.params;

    const response = await Response.findOne({ id_link }).populate('id_user').populate('id_personality');
    if (!response) {
      return res.status(404).json({ message: 'Response not found' });
    }

    res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
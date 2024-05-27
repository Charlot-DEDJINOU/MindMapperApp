const Personality = require('../models/Personality');

exports.create = async (req, res) => {
  try {
    const { name, description } = req.body;

    const existingPersonality = await Personality.findOne({ name });
    if (existingPersonality) {
      return res.status(400).json({ message: 'Personality with this name already exists' });
    }

    const newPersonality = new Personality({
      name,
      description,
    });

    const savedPersonality = await newPersonality.save();
    res.status(201).json({ message: 'Personality created successfully', personality: savedPersonality });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.personality = async (req, res) => {
    try {
      const { id } = req.params;

      const personality = await Personality.findById(id);
      if (!personality) {
        return res.status(404).json({ message: 'Personality not found' });
      }
  
      res.status(200).json({ personality });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

exports.getAllPersonalities = async (req, res) => {
    try {
      const personalities = await Personality.find();
      res.status(200).json({ personalities });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description } = req.body;

      const personality = await Personality.findById(id);
      if (!personality) {
        return res.status(404).json({ message: 'Personality not found' });
      }

      personality.name = name || personality.name;
      personality.description = description || personality.description;

      const updatedPersonality = await personality.save();
      res.status(200).json({ message: 'Personality updated successfully', personality: updatedPersonality });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
      const { id } = req.params;

      const personality = await Personality.findByIdAndDelete(id);
      if (!personality) {
        return res.status(404).json({ message: 'Personality not found' });
      }
  
      res.status(200).json({ message: 'Personality deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};
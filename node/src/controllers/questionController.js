const Question = require('../models/Question');

exports.create = async (req, res) => {
  try {
    const { identifiant, content } = req.body;

    const existingQuestion = await Question.findOne({ identifiant });
    if (existingQuestion) {
      return res.status(400).json({ message: 'Question with this identifier already exists' });
    }

    const newQuestion = new Question({
      identifiant,
      content,
    });

    const savedQuestion = await newQuestion.save();
    res.status(201).json({ message: 'Question created successfully', question: savedQuestion });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.question = async (req, res) => {
    try {
      const { id } = req.params;

      const question = await Question.findById(id);
      if (!question) {
        return res.status(404).json({ message: 'Question not found' });
      }
  
      res.status(200).json({ question });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};
  
exports.questions = async (req, res) => {
    try {
      const questions = await Question.find();
      res.status(200).json({ questions });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    try {
      const { id } = req.params;
      const { identifiant, content } = req.body;

      const question = await Question.findById(id);
      if (!question) {
        return res.status(404).json({ message: 'Question not found' });
      }

      question.identifiant = identifiant || question.identifiant;
      question.content = content || question.content;

      const updatedQuestion = await question.save();
      res.status(200).json({ message: 'Question updated successfully', question: updatedQuestion });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
      const { id } = req.params;

      const question = await Question.findByIdAndDelete(id);
      if (!question) {
        return res.status(404).json({ message: 'Question not found' });
      }
  
      res.status(200).json({ message: 'Question deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};
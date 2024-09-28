const { Quiz, Question } = require('../models/Quiz');

<<<<<<< HEAD
// Get all quizzes with populated questions
=======
// Get all quizzes
>>>>>>> 7addb2d852acf2c2d6a2ceb1633b845588980f92
exports.getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find().populate('questions');
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

<<<<<<< HEAD
// Get quiz by ID and populate questions
=======
// Get quiz by ID
>>>>>>> 7addb2d852acf2c2d6a2ceb1633b845588980f92
exports.getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.quizId).populate('questions');
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new quiz
exports.createQuiz = async (req, res) => {
  try {
    const newQuiz = new Quiz(req.body);
    await newQuiz.save();
    res.status(201).json(newQuiz);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

<<<<<<< HEAD
// Update a quiz by ID
exports.updateQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findByIdAndUpdate(req.params.quizId, req.body, { new: true });
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a quiz by ID
exports.deleteQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findByIdAndDelete(req.params.quizId);
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });
    res.json({ message: 'Quiz deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a single question in a quiz
=======
// Add a question to a quiz
>>>>>>> 7addb2d852acf2c2d6a2ceb1633b845588980f92
exports.addQuestionToQuiz = async (req, res) => {
  try {
    const { text, options, correctAnswerIndex } = req.body;
    const newQuestion = new Question({ text, options, correctAnswerIndex });
    await newQuestion.save();

    const quiz = await Quiz.findById(req.params.quizId);
    quiz.questions.push(newQuestion._id);
    await quiz.save();

    res.status(201).json(quiz);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

<<<<<<< HEAD
// Create multiple questions in a quiz
exports.addMultipleQuestionsToQuiz = async (req, res) => {
  try {
    const questions = await Question.insertMany(req.body.questions);
    const quiz = await Quiz.findById(req.params.quizId);

    questions.forEach(question => quiz.questions.push(question._id));
    await quiz.save();

    res.status(201).json(quiz);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all questions with the word "capital" in text for a quiz
exports.getQuestionsWithKeyword = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.quizId).populate({
      path: 'questions',
      match: { text: /capital/i }
    });

    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });
    res.json(quiz.questions);
=======
// Delete a quiz by ID
exports.deleteQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findByIdAndDelete(req.params.quizId);
    
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    
    res.json({ message: 'Quiz deleted' });
>>>>>>> 7addb2d852acf2c2d6a2ceb1633b845588980f92
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

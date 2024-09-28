const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const {
  getQuizzes,
  getQuizById,
  createQuiz,
  updateQuiz,
  deleteQuiz,
  addQuestionToQuiz,
  addMultipleQuestionsToQuiz,
  getQuestionsWithKeyword
} = require('../controllers/quizController');

// Routes for quizzes
router.get('/quizzes', getQuizzes);
router.get('/quizzes/:quizId', getQuizById);
router.post('/quizzes', createQuiz);
router.put('/quizzes/:quizId', updateQuiz);
router.delete('/quizzes/:quizId', deleteQuiz);

// Route for adding questions to a quiz
router.post('/quizzes/:quizId/question', addQuestionToQuiz);
router.post('/quizzes/:quizId/questions', addMultipleQuestionsToQuiz);

// Route for finding questions with the word "capital" in text
router.get('/quizzes/:quizId/populate', getQuestionsWithKeyword);

=======
const { getQuizzes, getQuizById, createQuiz, addQuestionToQuiz, deleteQuiz } = require('../controllers/quizController');

// Route for getting all quizzes
router.get('/quizzes', getQuizzes);

// Route for getting a quiz by its ID
router.get('/quizzes/:quizId', getQuizById);

// Route for creating a new quiz
router.post('/quizzes', createQuiz);

// Route for adding a question to a quiz
router.post('/quizzes/:quizId/question', addQuestionToQuiz);

// Route for deleting a quiz
router.delete('/quizzes/:quizId', deleteQuiz);

>>>>>>> 7addb2d852acf2c2d6a2ceb1633b845588980f92
module.exports = router;

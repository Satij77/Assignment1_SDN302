import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import axios from 'axios'; // for API requests
import './QuizList.css'; // Importing the CSS file for styling

const QuizList = ({ quizzes, setQuizzes }) => {
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  // Handle the Delete action
  const handleDelete = async (quizId) => {
    if (window.confirm('Are you sure you want to delete this quiz?')) {
      try {
        // Send DELETE request to backend
        await axios.delete(`http://localhost:5000/api/quizzes/${quizId}`);
        // Remove the deleted quiz from the state
        setQuizzes(quizzes.filter(quiz => quiz._id !== quizId));
      } catch (error) {
        console.error('Error deleting quiz:', error);
      }
    }
  };

  // Handle the View action (redirect to quiz details page)
  const handleView = (quizId) => {
    navigate(`/quiz/${quizId}`); // Use navigate instead of history.push
  };

  // Handle the Edit action (redirect to quiz edit page)
  const handleEdit = (quizId) => {
    navigate(`/quiz/edit/${quizId}`); // Use navigate instead of history.push
  };

  return (
    <div className="quiz-list-container">
      <h2>Available Quizzes</h2>
      <ul className="quiz-list">
        {quizzes.map((quiz) => (
          <li key={quiz._id} className="quiz-item">
            <div className="quiz-details">
              <h3>{quiz.title}</h3>
              <p>{quiz.description}</p>
            </div>
            <div className="quiz-actions">
              {/* Add buttons for viewing, editing, and deleting quizzes */}
              <button className="btn view-btn" onClick={() => handleView(quiz._id)}>
                View
              </button>
              <button className="btn edit-btn" onClick={() => handleEdit(quiz._id)}>
                Edit
              </button>
              <button className="btn delete-btn" onClick={() => handleDelete(quiz._id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizList;
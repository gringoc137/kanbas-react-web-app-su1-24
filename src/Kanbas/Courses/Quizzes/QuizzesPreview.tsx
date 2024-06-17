import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './QuizPreview.css'; // Import a CSS file for styling
 
// Define types for question and answers
interface Question {
  id: number;
  text: string;
  options: string[];
}
 
interface Answers {
  [key: number]: string;
}
 
// Mock data to simulate server responses
const mockQuestions: Question[] = [
  {
    id: 1,
    text: "An HTML label element can be associated with an HTML input element by setting their id attributes to the same value. The resulting effect is that when you click on the label text, the input element receives focus as if you had clicked on the input element itself.",
    options: ["True", "False"],
  },
  // Add more questions as needed
];
 
const mockPreviousAnswers: Answers = {
  1: "True",
  // Add previous answers for other questions if needed
};
 
const QuizPreview: React.FC = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Answers>({});
  const [previousAnswers, setPreviousAnswers] = useState<Answers>({});
 
  useEffect(() => {
    // Simulate fetching quiz questions
    setQuestions(mockQuestions);
 
    // Simulate fetching previous answers
    setPreviousAnswers(mockPreviousAnswers);
  }, [quizId]);
 
  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers({
      ...answers,
      [questionId]: answer,
    });
  };
 
  const handleSubmit = () => {
    console.log('Quiz submitted successfully:', answers);
    // Handle successful submission, e.g., display score or save to local storage
    localStorage.setItem(`quiz-${quizId}-answers`, JSON.stringify(answers));
  };
 
  const handleEditQuiz = () => {
    navigate(`/quizzes/${quizId}/edit`);
  };
 
  return (
    <div className="quiz-preview">
      <h1>Q1 - HTML</h1>
      <div className="quiz-info">
        <p>This is a preview of the published version of the quiz</p>
        <p>Started: Nov 29 at 8:19am</p>
      </div>
      <h2>Quiz Instructions</h2>
      {questions.map((question, index) => (
        <div key={question.id} className="question-card">
          <div className="question-header">
            <h3>Question {index + 1}</h3>
            <span>1 pts</span>
          </div>
          <p>{question.text}</p>
          <div className="options">
            {question.options.map(option => (
              <label key={option} className="option">
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option}
                  checked={answers[question.id] === option}
                  onChange={() => handleAnswerChange(question.id, option)}
                />
                {option}
              </label>
            ))}
          </div>
          <button className="next-button">Next</button>
        </div>
      ))}
      <div className="quiz-footer">
        <button onClick={handleSubmit} className="submit-quiz">Submit Quiz</button>
        <button onClick={handleEditQuiz} className="edit-quiz">Keep Editing This Quiz</button>
      </div>
    </div>
  );
};
 
export default QuizPreview;

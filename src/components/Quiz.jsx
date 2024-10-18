import React, { useState } from 'react';

function Quiz({ questions, onComplete }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setShowResult(true);
      if (currentQuestionIndex === questions.length - 1) {
        onComplete(true);
      } else {
        setTimeout(() => {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setSelectedAnswer('');
          setShowResult(false);
        }, 1500);
      }
    } else {
      setShowResult(true);
      setTimeout(() => {
        setSelectedAnswer('');
        setShowResult(false);
      }, 1500);
    }
  };

  return (
    <div className="quiz">
      <h3>question</h3>
      <p>{currentQuestion.question}</p>
      <div className="options">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelection(option)}
            className={selectedAnswer === option ? 'selected' : ''}
          >
            {option}
          </button>
        ))}
      </div>
      <button onClick={handleSubmit} disabled={!selectedAnswer}>
        Submit
      </button>
      {showResult && (
        <p className={selectedAnswer === currentQuestion.correctAnswer ? 'correct' : 'incorrect'}>
          {selectedAnswer === currentQuestion.correctAnswer ? 'That`s right!' : 'Try again.'}
        </p>
      )}
    </div>
  );
}

export default Quiz;
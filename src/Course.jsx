import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './App.css';
import Block from './components/Block';
import Quiz from './components/Quiz';
import baselineCourseData from './data/baselineCourseContent.json';
import advancedCourseData from './data/advancedCourseContent.json';

function Course() {
  const { courseType } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    if (courseType === 'baseline') {
      setCourseData(baselineCourseData);
    } else if (courseType === 'advanced') {
      setCourseData(advancedCourseData);
    }
  }, [courseType]);

  const handleQuizCompletion = (success) => {
    if (success) {
      setQuizCompleted(true);
    }
  };

  const moveToNextBlock = () => {
    if (currentBlockIndex < courseData.blocks.length - 1) {
      setCurrentBlockIndex(currentBlockIndex + 1);
      setQuizCompleted(false);
    }
  };

  if (!courseData) {
    return <div>Loading...</div>;
  }

  const currentBlock = courseData.blocks[currentBlockIndex];

  return (
    <div className="Course">
      <header>
        <h1>{courseData.title}</h1>
      </header>
      <main>
        <Block title={currentBlock.title} content={currentBlock.content} />
        {!quizCompleted ? (
          <Quiz questions={currentBlock.quiz} onComplete={handleQuizCompletion} />
        ) : (
          <div className="quiz-completed">
            <p>Awesome, you've done it.</p>
            {currentBlockIndex < courseData.blocks.length - 1 ? (
              <button onClick={moveToNextBlock}>Next chapter</button>
            ) : (
              <p>Congratulations! You've completed the course.</p>
            )}
          </div>
        )}
      </main>
      <footer>
        <Link to="/" className="back-button">Back</Link>
      </footer>
    </div>
  );
}

export default Course;
import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';

function Courses() {
  return (
    <div className="Courses">
      <div className="nav-buttons">
        <Link to="/" className="nav-button">Home</Link>
      </div>
      <header>
        <h1>Barista Courses</h1>
      </header>
      <main>
        <Link to="/course/baseline" className="course-button baseline">
          <span>Barista Baseline Course</span>
        </Link>
        <Link to="/course/advanced" className="course-button advanced">
          <span>Advanced Barista Course</span>
        </Link>
      </main>
    </div>
  );
}

export default Courses;
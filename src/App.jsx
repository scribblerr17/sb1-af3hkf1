import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Courses from './Courses';
import Course from './Course';
import CoffeeDictionary from './CoffeeDictionary';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:courseType" element={<Course />} />
          <Route path="/dictionary" element={<CoffeeDictionary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
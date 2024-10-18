import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Search from './Search';

function Home() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="Home">
      <div className="nav-buttons">
        <Link to="/dictionary" className="nav-button">Coffee Dictionary</Link>
        <Link to="/courses" className="nav-button">Barista Courses</Link>
        <button className="nav-button search-button" onClick={() => setShowSearch(!showSearch)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
           
        </button>
      </div>
      {showSearch && <Search />}
      <header>
        <h1>Barista Trak</h1>
      </header>
      <main>
        <p>Welcome to Barista Trak, your gateway to mastering the art of coffee making. Explore our courses and expand your knowledge with our comprehensive coffee dictionary.</p>
      </main>
    </div>
  );
}

export default Home;
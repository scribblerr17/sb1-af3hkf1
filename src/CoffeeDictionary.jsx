import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CoffeeDictionary.css';
import coffeeDefinitions from './data/coffeeDefinitions.json';

function CoffeeDictionary() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDefinitions = coffeeDefinitions.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="CoffeeDictionary">
      <header>
        <h1>Coffee Dictionary</h1>
      </header>
      <main>
        <input
          type="text"
          placeholder="Search coffee terms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <div className="definitions-list">
          {filteredDefinitions.map((item, index) => (
            <div key={index} className="definition-item">
              <h3>{item.term}</h3>
              <p>{item.definition}</p>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <Link to="/" className="back-button">Back to Home</Link>
      </footer>
    </div>
  );
}

export default CoffeeDictionary;
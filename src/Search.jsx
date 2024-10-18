import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import coffeeDefinitions from './data/coffeeDefinitions.json';
import './Search.css';

const courses = [
  { name: "Barista Baseline Course", path: "/course/baseline" },
  { name: "Advanced Barista Course", path: "/course/advanced" }
];

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      const filteredCourses = courses.filter(course =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      const filteredDefinitions = coffeeDefinitions.filter(item =>
        item.term.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setSearchResults([...filteredCourses, ...filteredDefinitions]);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Search courses or coffee terms..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((result, index) => (
            <div key={index} className="search-result-item">
              {result.path ? (
                <Link to={result.path}>{result.name}</Link>
              ) : (
                <div>
                  <h3>{result.term}</h3>
                  <p>{result.definition}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
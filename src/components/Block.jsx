import React from 'react';

function Block({ title, content }) {
  return (
    <div className="block">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Block;
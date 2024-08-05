import React from 'react';
import './Cards.css';

const Cards = ({ id, text }) => {
  return (
    <div className="post-it bg-violet-950 text-white">
      <div className="pin"></div>
      <div className="post-it-text p-10">
        {text}
      </div>    
    </div>
  );
};

export default Cards;

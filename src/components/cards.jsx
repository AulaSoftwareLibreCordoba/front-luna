import React from 'react';

const Cards = ({ id, text }) => {
  return (
    <div className="w-48 h-48 relative p-2 m-5 flex justify-center items-center text-white text-base shadow-2xl rotate-6">
      <div className="w-3 h-3 bg-white absolute rounded-md translate-x-[-50%] top-[-7px] left-[50%] shadow-lg"></div>
      <div className="w-full h-full text-base text-white overflow-hidden flex justify-center items-center text-center">
        {text}
      </div>    
    </div>
  );
};

export default Cards;

import React from 'react';

const Cards = ({ id, text }) => {
  return (
    <div className="w-48 h-48 relative p-2 m-5 flex border border-violet-900 rounded justify-center items-center  text-base hover:scale-110 transition duration-300">
      {/* <div className="w-3 h-3 bg-red-600 absolute rounded-md translate-x-[-50%] top-[-7px] left-[50%] shadow-lg"></div> */}
      <div className="w-full h-full text-base texto-pizarra overflow-hidden flex justify-center items-center text-center">
        {text}
      </div>    
    </div>
  );
};

export default Cards;

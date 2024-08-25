import React from 'react';

const Cards = ({ id, text, success }) => {
  const cardStyle = { color: success ? 'rgb(34 197 94)' : 'rgb(185 28 28)' };

  return (
    <div className="w-48 h-56 relative p-2 m-5 border border-violet-900 rounded justify-center items-center text-base hover:scale-125 transition duration-300 grid">
      {/* <div className="w-3 h-3 bg-red-600 absolute rounded-md translate-x-[-50%] top-[-7px] left-[50%] shadow-lg"></div> */}
      <div className="w-full h-full text-base texto-pizarra overflow-hidden flex items-center">
        {text?.length > 100 ? text.slice(0, 100) + "..." : text}
      </div>
      <hr className='w-3/4 mx-auto border-violet-900'></hr>
      <span className='justify-end flex'>
        <i className="fa-solid fa-heart mx-6" style={cardStyle}></i>
      </span>
    </div>
  );
};

export default Cards;

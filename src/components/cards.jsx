import React,{ useEffect, useState} from 'react';

const Cards = ({ id, text, success }) => {
  return (
    <div className="w-48 h-56 relative p-2 m-5 border border-violet-900 rounded justify-center items-center text-base hover:scale-125 transition duration-300 grid">
      {/* <div className="w-3 h-3 bg-red-600 absolute rounded-md translate-x-[-50%] top-[-7px] left-[50%] shadow-lg"></div> */}
      <div className="w-full h-full text-base texto-pizarra overflow-hidden flex items-center">
        {text?.length > 100 ? text.slice(0, 100) + "..." : text}
      </div>
      <hr className='w-3/4 mx-auto border-violet-900'></hr>
      <button className='justify-end flex'>
      <i className={`fa-solid fa-heart fa-lg mx-6 ${success ? 'text-red-600' : 'text-gray-400'} hover:text-red-400 duration-100`}></i>
    </button>
    </div>
  );
};

export default Cards;

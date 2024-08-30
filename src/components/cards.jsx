import React, { useEffect, useState } from 'react';

const Cards = ({ id, text, success, nombre }) => {
  const [favorite, setFavorite] = useState(success);

  const toggleFavorite = () => {
    console.log('Toggle function called'); 
    setFavorite(!favorite);
  };

  useEffect(() => {
    console.log('Hay un cambio en el corazón'); 
  }, [favorite]);

  return (
    
    <div className="w-80 h-80 sm:w-72 sm:mx-auto relative p-5 m-5 border border-violet-900 rounded items-center text-base hover:scale-110 transition duration-300 grid">
      <div className="w-full h-full text-base texto-pizarra overflow-hidden grid items-center">
        <span className='text-center text-2xl'>{nombre}</span>
        <hr className='w-full mx-auto border-violet-900'></hr>
        <span className=' text-sm '>{text?.length > 100 ? text.slice(0, 100) + "..." : text}</span>
      </div>
      <button className="justify-end flex h-5">
        <i className={`fa-solid fa-heart fa-lg ${favorite ? 'text-red-600' : 'text-gray-400'} hover:text-red-400 duration-100`}></i>
      </button>
    </div>
  );
};

export default Cards;

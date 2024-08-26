import React, { useEffect, useState } from 'react';

const Cards = ({ id, text, success }) => {
  const [favorite, setFavorite] = useState(success);

  const toggleFavorite = () => {
    console.log('Toggle function called'); 
    setFavorite(!favorite);
  };

  useEffect(() => {
    console.log('Hay un cambio en el corazón'); 
  }, [favorite]);

  return (
    
    <div className="w-48 h-56 relative p-2 m-5 border border-violet-900 rounded justify-center items-center text-base hover:scale-125 transition duration-300 grid">
        {console.log('Component rendered')}
      <div className="w-full h-full text-base texto-pizarra overflow-hidden flex items-center">
        {text?.length > 100 ? text.slice(0, 100) + "..." : text}
      </div>
      <hr className='w-3/4 mx-auto border-violet-900'></hr>
      <button className='justify-end flex h-4' onClick={() => console.log('Button clicked')}>
        <i className={`fa-solid fa-heart fa-lg mx-6 ${favorite ? 'text-red-600' : 'text-gray-400'} hover:text-red-400 duration-100`}></i>
      </button>
    </div>
  );
};

export default Cards;

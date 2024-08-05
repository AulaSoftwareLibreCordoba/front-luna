import React, { useState, useEffect } from 'react';
import Cards from './cards';
import './pizarra.css';

const Pizarracomponent = () => {
    const [cardsData, setCardsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./info.json');
                if (!response.ok) {
                    throw new Error('Error al cargar el archivo JSON: ' + response.statusText);
                }
                const data = await response.json();
                console.log('Datos cargados:', data); // Verificar los datos cargados
                setCardsData(data);
            } catch (error) {
                console.error('Error al cargar el archivo JSON:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className=' w-[42%] h-[50%] mx-auto border rounded-xl border-violet-900 mt-14'>
                    <div className=' p-3 pizarra overflow-hidden overflow-y-scroll h-[34rem] grid border-[20px] rounded-xl border-violet-950 bg-transparent'>
                    {cardsData.map(card => (
                        <Cards key={card.id} text={card.text} />
                    ))}
                    <div className='flex justify-center'>
                        <Cards id={1} text={'hola mundo'} />
                        <Cards id={1} text={'hola mundo'} />
                        <Cards id={1} text={'hola mundo'} />
                    </div>
                    <div className='flex justify-center'>
                        <Cards id={1} text={'hola mundo'} />
                        <Cards id={1} text={'hola mundo'} />
                        <Cards id={1} text={'hola mundo'} />
                    </div>
                    <div className='flex justify-center'>
                        <Cards id={1} text={'hola mundo'} />
                        <Cards id={1} text={'hola mundo'} />
                        <Cards id={1} text={'hola mundo'} />
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Pizarracomponent;

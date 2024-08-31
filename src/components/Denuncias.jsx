import React, { useState } from "react";

const FormComponent = () => {
  const [name, setName] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [reason, setReason] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const handleReasonChange = (e) => {
    const text = e.target.value;
    const words = text.trim().split(/\s+/);
    const wordCount = words.length;

    if (wordCount <= 300) {
      setReason(text);
      setWordCount(wordCount);
    }
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    // usamos el post registramos el headers el cual incluye el token y pasamos al body los valores de id...
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: name,
        resumen: reason,
        fechaCreacion: selectedClass,
        validado: '1',
      })
    };

    fetch('http://5.196.26.7:8080/denuncias', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        // Redirige a la página especificada después de recibir la respuesta
        window.location.assign("/pizarra");
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <form
      onSubmit={handleSubmitLogin} 
      className="mt-4 w-auto md:w-[50%] max-w-screen-lg mx-auto p-6 bg-white bg-opacity-5 border-2 border-violet-500 shadow-md rounded-lg backdrop-blur-md"
    >
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block text-gray-500 font-bold text-xl mb-2"
        >
          Denunciantes
        </label>
        <textarea
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 bg-transparent border-2 border-violet-500 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-violet-500 text-lg placeholder-gray-400"
          rows="2"
          placeholder="Escribe tu nombre aquí" required
        ></textarea>
      </div>
      <div className="mb-6">
        <label
          htmlFor="class"
          className="block text-gray-500 font-bold text-xl mb-2"
        >
          Clase
        </label>
        <select
          id="class"
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="w-full p-3 bg-transparent border-2 border-violet-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 text-lg" required
        >
          <option value="" disabled>
            Selecciona una clase
          </option>
          <option value="clase1">Clase 1</option>
          <option value="clase2">Clase 2</option>
          <option value="clase3">Clase 3</option>
        </select>
      </div>
      <div>
        <div>
          <label htmlFor="birthdate" className="block text-gray-500 font-bold text-xl mb-2">Fecha de los hechos</label>
          <input id="birthdate" type="date" min="1900-01-01" max="2100-01-01" className="datepicker rounded-md w-full p-3 bg-transparent border-2 mb-3 border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500 text-lg" name="fecha_nacimiento" required />
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="class" className="block text-gray-500 font-bold text-xl mb-2"> Letra </label>
        <select
          id="letra"
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="w-full p-3 border-2 border-violet-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 text-lg"
          required
        >
          <option value="" disabled>
            Selecciona la letra de la clase
          </option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>
      </div>
      <div className="mb-6">
        <label
          htmlFor="reason"
          className="block text-gray-500 font-bold text-xl mb-2"
        >
          Motivo
        </label>
        <textarea
          id="reason"
          value={reason}
          onChange={handleReasonChange}
          className="w-full p-3 bg-transparent border-2 border-violet-500 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-violet-500 text-lg placeholder-gray-400"
          rows="5"
          placeholder="Escribe tu motivo aquí" required
        ></textarea>
        <div className="text-right text-gray-500 text-lg">
          {wordCount}/300 palabras
        </div>
      </div>
      <div className="flex justify-center">
        <button type="submit" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-violet-500 group">
          <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-violet-600 group-hover:h-full"></span>
          <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Enviar</span>
        </button>
      </div>
    </form>
  );
};

export default FormComponent;

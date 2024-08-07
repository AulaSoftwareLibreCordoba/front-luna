import React, { useState } from "react";

const FormComponent = () => {
  const [name, setName] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [reason, setReason] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const handleReasonChange = (e) => {
    const text = e.target.value;
    const words = text.split(/\s+/);
    const wordCount = words.length;

    if (wordCount <= 300) {
      setReason(text);
      setWordCount(wordCount);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      selectedClass,
      reason,
    });

    // Redirige a la página especificada
    window.location.assign("/pizarra");
  };

  return (
    <form
      onSubmit={handleSubmit}
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
          placeholder="Escribe tu nombre aquí"
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
          className="w-full p-3 bg-transparent border-2 border-violet-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 text-lg"
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
          <label for="birthdate" className="block text-gray-500 font-bold text-xl mb-2">Fecha de los hechos</label>
          <input id="birthdate" type="date" min="1900-01-01" max="2100-01-01" class="datepicker rounded-md w-full p-3 bg-transparent border-2 mb-3 border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500 text-lg " name="fecha_nacimiento" required/>
      </div>
      </div>
      <div className="mb-6">
        <label htmlFor="class" className="block text-gray-500 font-bold text-xl mb-2"> Letra </label>
        <select
          id="letra"
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="w-full p-3 bg-transparent border-2 border-violet-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 text-lg"
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
          placeholder="Escribe tu motivo aquí"
        ></textarea>
        <div className="text-right text-gray-500 text-lg">
          {wordCount}/300 palabras
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="flex font-bold bg-gradient-to-b from-violet-950 to-transparent p-4 rounded-lg hover:bg-purple-900 text-white transition-colors duration-300 border-[1px] border-violet-900"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default FormComponent;

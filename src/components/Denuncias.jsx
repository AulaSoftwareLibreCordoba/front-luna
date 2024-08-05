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
      className="mt-14 w-11/12 max-w-screen-lg mx-auto p-6 bg-white bg-opacity-5 border-2 border-gray-300 shadow-md rounded-lg backdrop-blur-md"
    >
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block text-gray-700 font-bold text-xl mb-2"
        >
          Denunciantes
        </label>
        <textarea
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 bg-transparent border-2 border-white rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg placeholder-gray-400"
          rows="2"
          placeholder="Escribe tu nombre aquí"
        ></textarea>
      </div>
      <div className="mb-6">
        <label
          htmlFor="class"
          className="block text-gray-700 font-bold text-xl mb-2"
        >
          Clase
        </label>
        <select
          id="class"
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="w-full p-3 bg-transparent border-2 border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        >
          <option value="" disabled>
            Selecciona una clase
          </option>
          <option value="clase1">Clase 1</option>
          <option value="clase2">Clase 2</option>
          <option value="clase3">Clase 3</option>
        </select>
      </div>
      <div className="mb-6">
        <label
          htmlFor="reason"
          className="block text-gray-700 font-bold text-xl mb-2"
        >
          Motivo
        </label>
        <textarea
          id="reason"
          value={reason}
          onChange={handleReasonChange}
          className="w-full p-3 bg-transparent border-2 border-white rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg placeholder-gray-400"
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
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default FormComponent;

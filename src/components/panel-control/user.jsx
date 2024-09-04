import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function User({ nombre, id, email }) {
  const backgroundColor = id % 2 === 0 ? "bg-white" : "bg-slate-200";

  return (
    
    <div
      className={`${backgroundColor} border border-inherit flex flex-col p-4 text-start box-border w-full mb-0 justify-between items-center lg:flex-row lg:text-center`}
    >
    <div className="flex w-full">
      <div className="w-full flex flex-col lg:flex-row lg:w-3/4 lg:items-center">
        <div className="flex-1 lg:w-1/4">
          <p className="font-bold lg:hidden">Usuario: </p>
          <p>{id}</p>
        </div>
        <div className="flex-1 lg:w-1/4">
          <p className="font-bold lg:hidden">Nombre: </p>
          <p>{nombre}</p>
        </div>
        <div className="flex-1 lg:w-1/4">
          <p className="font-bold lg:hidden">Email: </p>
          <p>{email}</p>
        </div>
      </div>
      <div className="w-full md:w-1/4 grid lg:flex justify-end gap-2 mt-2 lg:mt-0 lg:justify-end">
        <button
          id={`${id}`}
          className="grid justify-center items-center w-10 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#f5935a] via-[#ee7d14] to-[#f36d00] hover:shadow-sm hover:shadow-orange-500 hover:scale-105 duration-300 hover:from-[#eb7a4e] hover:to-[#f0853d] xl:w-10"
        >
          <FontAwesomeIcon icon={faPencil} className="size-4" />
        </button>
        <button className="grid justify-center items-center w-10 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-sm hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185] xl:w-10">
          <FontAwesomeIcon icon={faTrash} className="size-4" />
        </button>
      </div>
    </div>
    </div>
  );
}

export default User;

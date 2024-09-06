import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function User({ nombre, id, email }) {
  const backgroundColor = id % 2 === 0 ? "bg-white" : "bg-slate-200";

  return (
    <div
      className={`${backgroundColor} border border-inherit flex flex-col p-4 text-start box-border w-full mb-0 justify-between items-center xl:flex-row xl:text-center`}
    >
      <div className="w-full flex flex-col xl:flex-row xl:w-3/4">
        <div className="flex-1 xl:w-1/4">
          <p className="font-bold md:hidden">Usuario: </p>
          <p>{id}</p>
        </div>
        <div className="flex-1 xl:w-1/4">
          <p className="font-bold md:hidden">Nombre: </p>
          <p>{nombre}</p>
        </div>
        <div className="flex-1 xl:w-1/4">
          <p className="font-bold md:hidden">Email: </p>
          <p>{email}</p>
        </div>
      </div>
      <div className="w-full xl:w-1/4 flex justify-between gap-2 mt-2 xl:mt-0 xl:justify-end">
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
  );
}

export default User;

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


function User({ nombre, id, email }) {
  const backgroundColor = id % 2 === 0 ? "bg-white" : "bg-slate-200";

  return (
    <div
      className={`${backgroundColor} border border-inherit flex flex-row p-4 text-start box-border w-full mb-0  justify-between items-center`}
    >
      <div className="md:flex md:gap-10 lg:gap-40 xl:gap-80">
        <div className="flex gap-2">
          <p className="font-bold md:hidden">Usuario: </p><p>{id}</p>
        </div>
        <div className="flex gap-2">
          <p className="font-bold md:hidden">Nombre: </p><p>{nombre}</p>
        </div>
        {/* <div className="flex gap-2-1">
          <p className="font-bold md:hidden">{apellidos}</p>
        </div> */}
        <div className="flex gap-2">
          <p className="font-bold md:hidden">Email: </p><p>{email}</p>
        </div>
      </div>
      <div className="grid gap-2 md:flex">
        <div>
          <button
            id={`${id}`}
            class="flex justify-center items-center w-10 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#f5935a] via-[#ee7d14] to-[#f36d00] hover:shadow-sm hover:shadow-orange-500 hover:scale-105 duration-300 hover:from-[#eb7a4e] hover:to-[#f0853d]"
          >
            <FontAwesomeIcon icon={faPencil} className="size-4" />
          </button>
        </div>
        <div>
          <button
            class="flex justify-center items-center w-10 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-sm hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]"
          >
            <FontAwesomeIcon icon={faTrash} className="size-4"/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default User;

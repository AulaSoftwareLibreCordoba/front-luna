import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';


function User({ nombre, id, email }) {
  const backgroundColor = id % 2 === 0 ? "bg-white" : "bg-slate-200";

  return (
    <div
      className={`${backgroundColor} border border-inherit flex flex-row p-4 text-center box-border w-full mb-0 items-center`}
    >
      <div className="flex-1">
        <p>{id}</p>
      </div>
      <div className="flex-1">
        <p>{nombre}</p>
      </div>
      {/* <div className="flex-1">
        <p>{apellidos}</p>
      </div> */}
      <div className="flex-1">
        <p>{email}</p>
      </div>
      <div className="flex-1 space-x-2">
        {/* <button
          onClick={onDelete}
          className="bg-[#ed5464] border-solid rounded p-4 text-white hover:bg-slate-600 ease-in duration-150"
        >
          Borrar
        </button> */}
        <button
          id={`${id}`}
          className="bg-[#f7ac59] border-solid rounded p-4 text-white hover:bg-slate-600 ease-in duration-150"
        >
          <FontAwesomeIcon icon={faPencil} />
        </button>
      </div>
    </div>
  );
}

export default User;

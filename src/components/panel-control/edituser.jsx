import User from "./user";
import "./styles/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Edituser({ nombre, id, email }) {
  return (
    <div className="flex flex-col bg-[#ffff] w-screen h-screen justify-between">

      <div className="flex flex-row bg-[19a689] p-4 pb-0 pr-8 text-center justify-end">
        <div className="mx-auto font-bold text-4xl items-center gap-3 flex">
          <FontAwesomeIcon icon={faUser} className="text-[#0f0c29] size-9 " />
          <h1 className="text-[#0f0c29] font-bold underline">USUARIOS</h1>
        </div>
        <button
          class="flex justify-center items-center w-10 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#51df7b] via-[#0bc467] to-[#049c55] hover:shadow-sm hover:shadow-green-400 hover:scale-105 duration-300 hover:from-[#3ebd73] hover:to-[#32d468]"
        >
          <FontAwesomeIcon icon={faPlus} className="size-4" />
        </button>
      </div>
      <div className="flex-1 p-4 overflow-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-300 jus">

        {nombre.map((nombres, index) => (
          <User
            key={id[index]}
            nombre={nombres}
            id={index}
            email={email[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default Edituser;

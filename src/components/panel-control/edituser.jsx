import User from "./user";
import "./styles/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


function Edituser({ nombre, id, email }) {
  return (
    <div className="flex flex-col bg-[#ffff] w-screen h-screen justify-between text-xs">
      <div className="flex flex-row bg-[19a689] pb-0 pr-4 text-center justify-end items-center">
        <button className="md:hidden hover:bg-slate-300 transition-all duration-300 ml-3 hover:rounded-full">
          <a href="/panel-control">
          <FontAwesomeIcon icon={faArrowLeft} className="text-[#0f0c29] size-7 p-3" />
          </a>
        </button>

        <div className="mx-auto p-auto font-bold text-4xl items-center gap-3 flex p-4">
          
          <FontAwesomeIcon icon={faUser} className="text-[#0f0c29] size-5 md:size-8" />
          <h1 className="text-[#0f0c29] mr-5 font-bold underline text-lg md:text-2xl">USUARIOS</h1>
        </div>
        <button
          class="flex justify-center items-center w-10 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#51df7b] via-[#0bc467] to-[#049c55] hover:shadow-sm hover:shadow-green-400 hover:scale-105 duration-300 hover:from-[#3ebd73] hover:to-[#32d468]"
        >
          <FontAwesomeIcon icon={faPlus} className="size-4" />
        </button>
      </div>
      <div className="flex-auto">

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

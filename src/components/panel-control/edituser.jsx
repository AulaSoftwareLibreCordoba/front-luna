import User from "./user";
import "./styles/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Edituser({ nombre, id, email }) {
  return (
    <div className="flex flex-col bg-[#ffff] w-screen h-screen">
      <div className="flex flex-row bg-[19a689] p-4 text-center justify-end">
        <button className="bg-[#19a689] p-4 border-solid rounded mr-[12%] text-white hover:bg-slate-600 ease-in duration-150">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <div className="flex-1 p-4 overflow-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-300">

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

import { useState } from "react";
import edituser from "./edituser";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';


function Dashboard() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="flex flex-col bg-[#0f0c29] w-64 h-screen">
      <div className="flex flex-col items-center p-4">
        <div className="text-center p-4 text-white bg-[#0f0c29] hover:bg-[#252849] rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-300 ease-in-out">
        <a href="/">
        <div className="text-white hover:bg-[#252849]  hover:rounded-full cursor-pointer">
          <FontAwesomeIcon icon={faHome} className="size-4"/>
        </div>
      </a>
        </div>
      </div>
      <a href="/users">
        <div className="p-4 text-white hover:bg-[#252849] cursor-pointer">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faUser} className="size-4"/>
            <p>Usuarios</p>
          </div>
        </div>
      </a>
      <a href="/denuncias-dash">
        <div className="p-4 text-white hover:bg-[#252849] cursor-pointer">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faExclamation} className="bg-white rounded-full text-black size-4" />
            <p>Denuncias</p>
          </div>
        </div>
      </a>
      <a href="/users">
        <div className="p-4 text-white hover:bg-[#252849] cursor-pointer">
        <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faPaperclip} className="size-4" />
            <p>Notas pizarra</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Dashboard;

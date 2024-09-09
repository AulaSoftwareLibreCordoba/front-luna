import { useState } from "react";
import edituser from "./edituser";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSign } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="flex-col bg-[#0f0c29] h-screen -scroll-my-0 overflow-y-hidden flex md:flex md:w-80">
      <div className="flex flex-col items-center">
        <div className="text-center mt-5 p-10 text-white bg-[#0f0c29] w-12 h-12 flex items-center justify-center ease-in-out">
          <div className="text-white">
            <FontAwesomeIcon icon={faChartPie} className="size-12" />
          </div>
        </div>
      </div>
      <div className="my-auto mb-auto">
        <a href="/users">
          <div className="p-4 text-white hover:bg-[#252849] cursor-pointer">
            <div className="flex items-center text-center md:m-3 mdtext-xl">
              <FontAwesomeIcon icon={faUser} className="size-7" />
              <p class="mx-auto font-bold text-lg">Usuarios</p>
            </div>
          </div>
        </a>
        <a href="/denuncias-dash">
          <div className="p-4 text-white hover:bg-[#252849] cursor-pointer">
            <div className="flex items-center text-center text-md md:m-3 md:text-xl">
              <FontAwesomeIcon icon={faCircleExclamation} className="size-7" />
              <p class="mx-auto font-bold text-lg">Denuncias</p>
            </div>
          </div>
        </a>
        <a href="/notas-dash">
          <div className="p-4 text-white hover:bg-[#252849] cursor-pointer">
            <div className="flex items-center text-center text-md md:m-3 md:text-xl">
              <FontAwesomeIcon icon={faClipboard} className="size-7" />
              <p class="mx-auto font-bold text-lg">Notas pizarra</p>
            </div>
          </div>
        </a>
      </div>
      <div className="p-16">
        <div className="mx-auto text-center p-4 text-white bg-red-800 hover:bg-red-900 rounded-full size-14 flex items-center justify-center transition-colors duration-300 ease-in-out">
          <a href="/">
            <div className="text-white hover:rounded-full cursor-pointer size-7">
              <FontAwesomeIcon icon={faSignOut} className="size-7" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

import { useState } from "react";
import edituser from "./edituser";
// import { Link } from "react-router-dom";
// import "@fortawesome/fontawesome-free/css/all.min.css";

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
        <div className="p-4 text-white hover:bg-[#252849] cursor-pointer">
          Inicio
        </div>
      </a>
        </div>
      </div>
      <a href="/users">
        <div className="p-4 text-white hover:bg-[#252849] cursor-pointer">
          Usuarios
        </div>
      </a>
      <a href="/users">
        <div className="p-4 text-white hover:bg-[#252849] cursor-pointer">
          Denuncias
        </div>
      </a>
      <a href="/users">
        <div className="p-4 text-white hover:bg-[#252849] cursor-pointer">
          Notas pizarra
        </div>
      </a>
    </div>
  );
}

export default Dashboard;

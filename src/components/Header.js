import React from "react";
import { IoMoonOutline, IoMoon } from "react-icons/io5";


const Header = ({ darkMode, darkModeHandler }) => {
  return (
    <header
      className={`py-5 px-2 sm:px-0 border my-5 ${
        darkMode ? "bg-[#2b3945]" : "bg-red-500"
      }`}
    >
      <nav className="flex items-center">
        <div className="border border-green-600 flex-grow">
          <h2 className=" text-white">where in the world</h2>
        </div>

        <div className="border border-red-600 flex-grow">
          <button
            className="border flex gap-3 items-center ml-auto"
            onClick={darkModeHandler}
          >
            {darkMode ? <IoMoon /> : <IoMoonOutline />}
            dark mode
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

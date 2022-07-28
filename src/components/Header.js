import React from "react";
import { IoMoon } from "react-icons/io5";

const Header = ({ darkMode, darkModeHandler }) => {
  return (
    <header
      className={`py-4 px-2 sm:px-0 ${
        darkMode ? "bg-[#2b3945] text-white" : "bg-white text-[#111517]"
      }`}
    >
      <nav className="w-full sm:w-[85%] mx-auto  flex items-center">
        <div className="flex-grow">
          <h2 className="capitalize">where in the world</h2>
        </div>

        <div className="flex-grow">
          <button
            className="flex gap-3 items-center ml-auto capitalize"
            onClick={darkModeHandler}
          >
            {darkMode ? (
              <IoMoon className="text-white" />
            ) : (
              <IoMoon className="text-[#111517]" />
            )}
            <span>{darkMode ? "light Mode" : "dark mode"}</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

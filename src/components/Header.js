import React from "react";
import { IoMoonOutline, IoMoon } from "react-icons/io5";

const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <h2>where in the world</h2>
        </div>
        <div>
          <button>
            <IoMoonOutline />
            <IoMoon /> dark mode
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

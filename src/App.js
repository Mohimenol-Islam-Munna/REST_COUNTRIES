import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// components
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CountryDetails from "./components/CountryDetails";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const darkModeHandler = () => {
    setDarkMode((prevState) => {
      return !prevState;
    });

    localStorage.setItem("darkMode", !darkMode);
  };

  useEffect(() => {
    if (localStorage.darkMode) {
      setDarkMode(JSON.parse(localStorage.getItem("darkMode")));
    }
  }, []);

  return (
    <>
      <div className="w-full sm:w-[85%] bg-[#202c37] mx-auto">
        <Header darkMode={darkMode} darkModeHandler={darkModeHandler} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country-details/:cc" element={<CountryDetails />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;

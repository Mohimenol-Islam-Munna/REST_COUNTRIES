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
      <Header darkMode={darkMode} darkModeHandler={darkModeHandler} />
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route
          path="/country-details/:cc"
          element={<CountryDetails darkMode={darkMode} />}
        />
      </Routes>
      <Footer darkMode={darkMode} />
    </>
  );
};

export default App;

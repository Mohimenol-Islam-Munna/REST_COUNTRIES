import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// components
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CountryDetails from "./components/CountryDetails";
import CheckHok from "./components/CheckHoc";
import JobDescriptionEditor from "./components/CKeditor";

// custom hooks
import useAllCountry from "./fetchData/useAllCountry";

const App = () => {
  const { loading, error, data } = useAllCountry();
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
    <div>
      <Header darkMode={darkMode} darkModeHandler={darkModeHandler} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              loading={loading}
              error={error}
              data={data}
              darkMode={darkMode}
            />
          }
        />

        <Route
          path="/country-details/:cc"
          element={<CountryDetails darkMode={darkMode} />}
        />
        <Route path="/check-hoc" element={<CheckHok darkMode={darkMode} />} />
      </Routes>
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;

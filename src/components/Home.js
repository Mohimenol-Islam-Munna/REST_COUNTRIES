import React from "react";

// components
import Countries from "./Countries";

const Home = ({ loading, error, data, darkMode }) => {
  return (
    <div className={`min-h-[100vh] ${darkMode ? "bg-[#202c37]" : "bg-white"}`}>
      <Countries
        darkMode={darkMode}
        loading={loading}
        error={error}
        data={data}
      />
    </div>
  );
};

export default Home;

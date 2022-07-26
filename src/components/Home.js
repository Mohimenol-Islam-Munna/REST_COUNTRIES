import React from "react";

// components
import Countries from "./Countries";

// custom hooks
import useAllCountry from "../fetchData/useAllCountry";

const Home = ({ darkMode }) => {
  const { loading, error, data } = useAllCountry();

  console.log("darkMode in home", darkMode);

  return (
    <div className={`${darkMode ? "bg-[#202c37]" : "bg-white"}`}>
      <Countries darkMode={darkMode} loading={loading} error={error} data={data} />
    </div>
  );
};

export default Home;

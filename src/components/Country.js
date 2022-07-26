import React from "react";

const Country = ({ darkMode, country }) => {
  return (
    <div>
      <div className="w-full h-[150px]">
        <img
          src={`${country?.flags?.svg}`}
          className="w-[100%] h-[100%] object-cover"
          alt="flag"
        />
      </div>

      <div className={`p-3 ${darkMode ? "text-white" : "text-black"}`}>
        <h3>{country?.name?.official}</h3>
        <ul>
          <li>Population : {country?.population}</li>
          <li>Region : {country?.region}</li>
          <li>Capital : {country?.capital}</li>
        </ul>
      </div>
    </div>
  );
};

export default Country;

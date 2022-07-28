import React from "react";
import { BiSearch } from "react-icons/bi";

const Search = ({
  darkMode,
  nameInput,
  selectRegion,
  searchHandler,
  filterHandler,
}) => {
  return (
    <div className="px-2 sm:px-0 py-5 flex flex-col sm:flex-row gap-2 sm:gap-0  sm:justify-between sm:items-center">
      {/* serach  */}
      <div className="basis-5/12 py-0">
        <div
          className={`flex items-center rounded-sm ${darkMode ? "bg-[#2b3945] text-white" : "bg-white text-[#858585]"
            }`}
        >
          <BiSearch className="mx-3 text-xl" />
          <input
            type="text"
            name="search"
            value={nameInput}
            className={`p-3 grow rounded-tr-sm rounded-br-sm ${darkMode
                ? "bg-[#2b3945] text-white placeholder:text-white"
                : "bg-white text-[#858585] placeholder:text-[#858585]"
              }`}
            onChange={(e) => searchHandler(e)}
            placeholder="Search country by name"
          />
        </div>
      </div>

      {/* filter  */}
      <div className="basis-4/12 py-0">
        <select
          name="region"
          value={selectRegion}
          className={`w-full p-3 rounded-sm ${darkMode ? "bg-[#2b3945] text-white" : "bg-white text-[#858585]"
            }`}
          onChange={(e) => filterHandler(e)}
        >
          <option value="">Select Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Search;

import React from "react";
import { BiSearch } from "react-icons/bi";

const Search = ({ searchHandler, filterHandler }) => {
  return (
    <div className="px-2 py-5 bg-gray-500 border my-5 flex justify-between items-center">
      {/* serach  */}
      <div className=" basis-5/12 py-0">
        <div className="flex items-center bg-gray-300 rounded-xl">
          <BiSearch className="mx-3 text-xl" />
          <input
            type="text"
            name="search"
            className="p-3 flex-grow rounded-tr-xl rounded-br-xl"
            onChange={(e) => searchHandler(e)}
            placeholder="Search country by name"
          />
        </div>
      </div>

      {/* filter  */}
      <div className="basis-4/12 py-0">
        <select
          name=""
          id=""
          className="w-full p-3 rounded-xl"
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

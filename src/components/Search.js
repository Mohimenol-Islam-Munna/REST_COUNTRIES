import React from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div>
      {/* serach  */}
      <div>
        <div>
          <BiSearch />
          <input type="text" />
        </div>
      </div>

      {/* filter  */}
      <div>
        <select name="" id="">
          <option value="a">A</option>
          <option value="b">B</option>
          <option value="c">C</option>
        </select>
      </div>
    </div>
  );
};

export default Search;

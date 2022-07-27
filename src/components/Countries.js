import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// components
import Country from "./Country";
import Search from "./Search";
import Pagination from "./Pagination";

// api endpoint
import { baseUrl } from "../fetchData/baseUrl";

const Countries = ({ darkMode, loading, error, data }) => {
  const [countryData, setCountryData] = useState(null);
  const [countryLoading, setCountryLoading] = useState(true);
  const [countryError, setCountryError] = useState(true);

  const [nameInput, setNameInput] = useState("");
  const [selectRegion, setSelectRegion] = useState("");

  useEffect(() => {
    setCountryData(data);
  }, [data]);

  useEffect(() => {
    setCountryLoading(loading);
  }, [loading]);

  useEffect(() => {
    setCountryError(error);
  }, [error]);

  // country search handler
  const searchHandler = async (e) => {
    setNameInput(e.target.value);
    setSelectRegion("");

    if (e.target.value.length > 0) {
      setCountryLoading(true);
      try {
        let res = await axios.get(`${baseUrl}/name/${e.target.value}`);
        setCountryData(res);
      } catch (err) {
        setCountryError(true);
      } finally {
        setCountryLoading(false);
      }
    } else {
      setCountryData(data);
    }
  };

  // filter country handler
  const filterHandler = async (e) => {
    setNameInput("");
    setSelectRegion(e.target.value);

    if (e.target.value.length > 0) {
      setCountryLoading(true);
      try {
        let res = await axios.get(`${baseUrl}/region/${e.target.value}`);
        setCountryData(res);
      } catch (err) {
        setCountryError(true);
      } finally {
        setCountryLoading(false);
      }
    } else {
      setCountryData(data);
    }
  };

  return (
    <div className="w-full sm:w-[85%] mx-auto">
      {/* search  */}
      <Search
        nameInput={nameInput}
        selectRegion={selectRegion}
        searchHandler={searchHandler}
        filterHandler={filterHandler}
      />

      {/* countries  */}
      <div className="borderborder-blue-800 grid grid-cols-[repeat(1,_minmax(150px,_50%))] justify-center xs:grid-cols-[repeat(2,_minmax(0px,_1fr))] sm:sm:grid-cols-[repeat(4,_minmax(150px,_1fr))] gap-4">
        {countryLoading ? (
          <h2>Loading .... hocche go</h2>
        ) : countryError && countryData === null ? (
          <h2>Something Wrong</h2>
        ) : countryData !== null || countryData?.data.length > 0 ? (
          <>
            {countryData?.data.map((country, index) => (
              <div className="border border-red-500  bg-[#2b3945] rounded-md">
                <Link to={`country-details/${country?.cca2}`} key={index}>
                  <Country darkMode={darkMode} country={country} />
                </Link>
              </div>
            ))}
          </>
        ) : (
          <h2>No Country Found</h2>
        )}
      </div>

      {/* pagination  */}
      <Pagination />
    </div>
  );
};

export default Countries;

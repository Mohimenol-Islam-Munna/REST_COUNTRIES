import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import debounce from "lodash.debounce";

// components
import Country from "./Country";
import Search from "./Search";
import Pagination from "./Pagination";

// api endpoint
import { baseUrl } from "../fetchData/baseUrl";

const Countries = ({ darkMode, loading, error, data }) => {
  const [countryData, setCountryData] = useState(null);
  const [countryPerPage, setCountryPerPage] = useState([]);
  const [countryLoading, setCountryLoading] = useState(true);
  const [countryError, setCountryError] = useState(true);

  const [countryPerPageCount] = useState(12);
  const [countryStartIndex, setCountryStartIndex] = useState(0);

  const [nameInput, setNameInput] = useState("");
  const [selectRegion, setSelectRegion] = useState("");

  // country search handler
  const searchHandler = async (value) => {
    console.log("search handler value:", value);

    setNameInput(value);
    setSelectRegion("");

    if (value.length > 0) {
      setCountryLoading(true);
      try {
        let res = await axios.get(`${baseUrl}/name/${value}`);
        setCountryData(res?.data);
      } catch (err) {
        setCountryError(true);
      } finally {
        setCountryLoading(false);
      }
    } else {
      setCountryData(data?.data);
    }
  };

  // country search debounce handler
  const debounceSearchHandler = useMemo(
    () => debounce((event, name) => searchHandler(event, name), 300),
    []
  );

  // filter country handler
  const filterHandler = async (e) => {
    setNameInput("");
    setSelectRegion(e.target.value);

    if (e.target.value.length > 0) {
      setCountryLoading(true);
      try {
        let res = await axios.get(`${baseUrl}/region/${e.target.value}`);
        setCountryData(res?.data);
      } catch (err) {
        setCountryError(true);
      } finally {
        setCountryLoading(false);
      }
    } else {
      setCountryData(data?.data);
    }
  };

  // pagination page handler
  const handlePageClick = (data) => {
    if (data.selected === 0) {
      setCountryStartIndex(0);
    }
    {
      setCountryStartIndex(data.selected * 10);
    }
  };

  useEffect(() => {
    setCountryData(data?.data);
    setCountryPerPage(
      data?.data.slice(
        countryStartIndex,
        countryStartIndex + countryPerPageCount
      )
    );
  }, [data]);

  useEffect(() => {
    if (!countryStartIndex >= 0) {
      setCountryPerPage(
        countryData?.slice(
          countryStartIndex,
          countryStartIndex + countryPerPageCount
        )
      );
    }
  }, [countryData, countryStartIndex]);

  useEffect(() => {
    setCountryLoading(loading);
  }, [loading]);

  useEffect(() => {
    setCountryError(error);
  }, [error]);

  // Stop the invocation of the debounced handlers after unmounting
  useEffect(() => {
    return () => {
      debounceSearchHandler.cancel();
    };
  }, []);

  return (
    <div className="border border-transparent w-full sm:w-[85%] mx-auto">
      {/* search  */}
      <Search
        darkMode={darkMode}
        nameInput={nameInput}
        selectRegion={selectRegion}
        debounceSearchHandler={debounceSearchHandler}
        filterHandler={filterHandler}
      />

      <div>
        {countryLoading ? (
          <h2
            className={`text-center text-3xl mt-5 ${
              darkMode ? " text-white" : "text-[#111517]"
            }`}
          >
            Loading ....
          </h2>
        ) : countryError && countryData === null ? (
          <h2
            className={`text-center text-3xl mt-5 ${
              darkMode ? " text-red-400" : "text-[#111517]"
            }`}
          >
            Something Wrong
          </h2>
        ) : countryData !== null && countryData?.length > 0 ? (
          <>
            {/* countries  */}
            <div className="px-2 sm:px-0 grid grid-cols-[repeat(1,_minmax(150px,_70%))] justify-center xs:grid-cols-[repeat(2,_minmax(0px,_1fr))] sm:sm:grid-cols-[repeat(4,_minmax(0px,_1fr))] gap-4">
              {countryPerPage?.map((country, index) => (
                <div
                  key={index}
                  className={`rounded-md ${
                    darkMode ? "bg-[#2b3945]" : "bg-white"
                  }`}
                >
                  <Link to={`country-details/${country?.cca2}`}>
                    <Country darkMode={darkMode} country={country} />
                  </Link>
                </div>
              ))}
            </div>

            {/* pagination  */}
            <Pagination
              darkMode={darkMode}
              handlePageClick={handlePageClick}
              totoalCountries={countryData}
              countryPerPageCount={countryPerPageCount}
            />
          </>
        ) : (
          <h2
            className={`text-center text-3xl mt-5 ${
              darkMode ? " text-white" : "text-[#111517]"
            }`}
          >
            No Country Found
          </h2>
        )}
      </div>
    </div>
  );
};

export default Countries;

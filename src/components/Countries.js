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
  const [countryPerPage, setCountryPerPage] = useState([]);
  const [countryLoading, setCountryLoading] = useState(true);
  const [countryError, setCountryError] = useState(true);

  const [countryPerPageCount, setCountryPerPageCount] = useState(12);
  const [countryStartIndex, setCountryStartIndex] = useState(0);

  console.log("countryData ::", countryData);
  // console.log("countryPerPage ::", countryPerPage);

  const [nameInput, setNameInput] = useState("");
  const [selectRegion, setSelectRegion] = useState("");

  // country search handler
  const searchHandler = async (e) => {
    setNameInput(e.target.value);
    setSelectRegion("");

    if (e.target.value.length > 0) {
      setCountryLoading(true);
      try {
        let res = await axios.get(`${baseUrl}/name/${e.target.value}`);
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
    console.log("handlePageClick", data);
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

  return (
    <div className="w-full sm:w-[85%] mx-auto">
      <div>
        {countryLoading ? (
          <h2 className="text-center text-white text-3xl mt-5">Loading ....</h2>
        ) : countryError && countryData === null ? (
          <h2 className="text-center text-red-400 text-3xl mt-5">
            Something Wrong
          </h2>
        ) : countryData !== null && countryData?.length > 0 ? (
          <>
            {/* search  */}
            <Search
              nameInput={nameInput}
              selectRegion={selectRegion}
              searchHandler={searchHandler}
              filterHandler={filterHandler}
            />
            {/* countries  */}
            <div className="borderborder-blue-800 grid grid-cols-[repeat(1,_minmax(150px,_50%))] justify-center xs:grid-cols-[repeat(2,_minmax(0px,_1fr))] sm:sm:grid-cols-[repeat(4,_minmax(150px,_1fr))] gap-4">
              {countryPerPage?.map((country, index) => (
                <div className="bg-[#2b3945] rounded-md">
                  <Link to={`country-details/${country?.cca2}`} key={index}>
                    <Country darkMode={darkMode} country={country} />
                  </Link>
                </div>
              ))}
            </div>

            {/* pagination  */}
            <Pagination
              handlePageClick={handlePageClick}
              totoalCountries={countryData}
              countryPerPageCount={countryPerPageCount}
            />
          </>
        ) : (
          <h2 className="text-center text-white text-3xl mt-5">
            No Country Found
          </h2>
        )}
      </div>
    </div>
  );
};

export default Countries;

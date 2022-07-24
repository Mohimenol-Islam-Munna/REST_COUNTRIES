import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../fetchData/baseUrl";

// components
import Country from "./Country";
import Search from "./Search";

const Countries = ({ loading, error, data }) => {
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
    <>
      <Search
        nameInput={nameInput}
        selectRegion={selectRegion}
        searchHandler={searchHandler}
        filterHandler={filterHandler}
      />
      <div className="py-5 border my-5">
        {countryLoading ? (
          <h2>Loading .... hocche go</h2>
        ) : countryError && countryData === null ? (
          <h2>Something Wrong</h2>
        ) : countryData !== null || countryData?.data.length <= 0 ? (
          countryData?.data.map((country, index) => (
            <Country key={index} country={country} />
          ))
        ) : (
          <h2>No Country Found</h2>
        )}
      </div>
    </>
  );
};

export default Countries;

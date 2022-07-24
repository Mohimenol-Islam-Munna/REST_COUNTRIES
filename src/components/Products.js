import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../fetchData/baseUrl";

// components
import Product from "./Product";
import Search from "./Search";

const Products = ({ loading, error, data }) => {
  const [countryData, setCountryData] = useState(null);

  console.log("countryData ::", countryData);
  console.log("data ::", data);

  useEffect(() => {
    setCountryData(data);
  }, [data]);

  // country search handler
  const searchHandler = async (e) => {
    if (e.target.value.length > 0) {
      try {
        let res = await axios.get(`${baseUrl}/name/${e.target.value}`);
        setCountryData(res);
      } catch (err) {
        console.log("error search product by country name ::", err);
      }
    } else {
      setCountryData(data);
    }
  };

  // filter country handler
  const filterHandler = async (e) => {
    console.log("searchHandler ::", e.target.value);

    if (e.target.value.length > 0) {
      try {
        let res = await axios.get(`${baseUrl}/region/${e.target.value}`);
        console.log("search product by country region ::", res);
        setCountryData(res);
      } catch (err) {
        console.log("error search product by country region ::", err);
      }
    } else {
      console.log("searchHandler  empty ::", e.target.value);
      setCountryData(data);
    }
  };

  if (loading) {
    return <h2>Loading ...</h2>;
  }

  if (error && countryData == null) {
    return <h2>Something Wrong</h2>;
  }

  return (
    <>
      <Search searchHandler={searchHandler} filterHandler={filterHandler} />
      <div className="py-5 border my-5">
        {countryData !== null ? (
          countryData?.data.map((country, index) => (
            <Product key={index} country={country} />
          ))
        ) : (
          <h2>No Country Found</h2>
        )}
      </div>
    </>
  );
};

export default Products;

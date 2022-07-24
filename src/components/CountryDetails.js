import React from "react";

import useCountryDetails from "../fetchData/useCountryDetails";

const CountryDetails = () => {
  const { loading, error, data } = useCountryDetails("bd");

  console.log("loading :", loading);
  console.log("data :", data);
  console.log("error :", error);

  return <div>ProductDetails</div>;
};

export default CountryDetails;

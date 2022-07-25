import React from "react";

// components
import Countries from "./Countries";

// custom hooks
import useAllCountry from "../fetchData/useAllCountry";

const Home = () => {
  const { loading, error, data } = useAllCountry();

  return (
    <>
      <Countries loading={loading} error={error} data={data} />
    </>
  );
};

export default Home;

import React from "react";

// components
import Header from "./components/Header";
import Countries from "./components/Countries";
import Pagination from "./components/Paginaion";
import Footer from "./components/Footer";
import CountryDetails from "./components/CountryDetails";

// custom hooks
import useAllCountry from "./fetchData/useAllCountry";

const App = () => {
  const { loading, error, data } = useAllCountry();

  return (
    <>
      <div className="w-full sm:w-[85%] mx-auto">
        <Header />
        <CountryDetails />
        <Countries loading={loading} error={error} data={data} />
        <Pagination />
        <Footer />

      </div>
    </>
  );
};

export default App;

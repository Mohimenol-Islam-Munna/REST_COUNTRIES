import React from "react";

// components
import Header from "./components/Header";
import Products from "./components/Countries";
import Pagination from "./components/Paginaion";
import Footer from "./components/Footer";
import ProductDetails from "./components/CountryDetails";

// custom hooks
import useAllCountry from "./fetchData/useAllCountry";

const App = () => {
  const { loading, error, data } = useAllCountry();

  return (
    <>
      <div className="w-full sm:w-[85%] mx-auto">
        <Header />
        <ProductDetails />
        <Products loading={loading} error={error} data={data} />
        <Pagination />
        <Footer />

      </div>
    </>
  );
};

export default App;

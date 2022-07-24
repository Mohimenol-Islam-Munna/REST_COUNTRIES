import React from "react";

// components
import Header from "./components/Header";
import Search from "./components/Search";
import Products from "./components/Products";
import Pagination from "./components/Paginaion";
import Footer from "./components/Footer";

// custom hooks
import useAllCountry from "./fetchData/useAllCountry";

const App = () => {
  const { loading, error, data } = useAllCountry();

  return (
    <>
      <Header />
      <Search />
      <Products loading={loading} error={error} data={data} />
      <Pagination />
      <Footer />
    </>
  );
};

export default App;

import React from "react";

// components
import Header from "./components/Header";
import Products from "./components/Products";
import Pagination from "./components/Paginaion";
import Footer from "./components/Footer";

// custom hooks
import useAllCountry from "./fetchData/useAllCountry";

const App = () => {
  const { loading, error, data } = useAllCountry();

  return (
    <>
      <div className="w-full sm:w-[85%] mx-auto">
        <Header />
        <Products loading={loading} error={error} data={data} />
        <Pagination />
        <Footer />
      </div>
    </>
  );
};

export default App;

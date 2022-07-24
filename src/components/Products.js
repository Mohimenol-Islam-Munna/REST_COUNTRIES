import React from "react";

// components
import Product from "./Product";
import Search from "./Search";

const Products = ({ loading, error, data }) => {
  if (loading) {
    return <h2>Loading ...</h2>;
  }

  if (error && data == null) {
    return <h2>Something Wrong</h2>;
  }

  return (
    <>
      <Search/>
      <div className="py-5 border my-5">
        {data !== null ? (
          data?.data.map((country, index) => (
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

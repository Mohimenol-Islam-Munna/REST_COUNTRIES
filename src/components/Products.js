import React from "react";
import Product from "./Product";

const Products = ({ loading, error, data }) => {
  console.log("loading in Products ::", loading);
  console.log("data in Products ::", data);

  if (loading) {
    return <h2>Loading ...</h2>;
  }

  if (error && data == null) {
    return <h2>Something Wrong</h2>;
  }

  return (
    <div>
      {data !== null ? (
        data?.data.map((country, index) => (
          <Product key={index} country={country} />
        ))
      ) : (
        <h2>No Country Found</h2>
      )}
    </div>
  );
};

export default Products;

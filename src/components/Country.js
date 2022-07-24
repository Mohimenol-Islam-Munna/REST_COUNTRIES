import React from "react";

const Product = ({ country }) => {
  return (
    <div style={{ border: "1px solid salmon" }}>
      <div>
        <img
          src={`${country?.flags?.svg}`}
          width="100"
          height="50"
          alt="flag"
        />
      </div>
      <div>
        <h3>{country?.name?.official}</h3>
        <ul>
          <li>Population : {country?.population}</li>
          <li>Region : {country?.region}</li>
          <li>Capital : {country?.capital}</li>
        </ul>
      </div>
    </div>
  );
};

export default Product;

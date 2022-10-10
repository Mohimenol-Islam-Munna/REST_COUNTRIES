import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Hoc = (Component) => {
  const ReturnComponent = () => {
    const [isLogedIn, setIsLogedIn] = useState(false);

    if (isLogedIn) {
      return <Component />;
    } else {
      return <Navigate to="/" />;
    }
  };

  return ReturnComponent;
};

export default Hoc;

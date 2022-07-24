import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "./baseUrl";

const useCountryDetails = (code) => {
  const [countryDetailsLoading, setCountryDetailsLoading] = useState(true);
  const [countryDetils, setCountryDetils] = useState(null);
  const [countryDetailsError, setCountryDetailsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get(`${baseUrl}/alpha/${code}`);
        setCountryDetils(res);
      } catch (err) {
        setCountryDetailsError(true);
      } finally {
        setCountryDetailsLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    loading: countryDetailsLoading,
    data: countryDetils,
    error: countryDetailsError,
  };
};

export default useCountryDetails;

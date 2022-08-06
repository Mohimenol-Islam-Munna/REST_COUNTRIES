import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "./baseUrl";

const useAllCountry = () => {
  const [allCountryLoading, setAllCountryLoading] = useState(true);
  const [allCountry, setAllCountry] = useState(null);
  const [allCountryError, setAllCountryError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get(`${baseUrl}/all`);
        setAllCountry(res);
      } catch (err) {
        setAllCountryError(true);
      } finally {
        setAllCountryLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data: allCountry,
    error: allCountryError,
    loading: allCountryLoading,
  };
};

export default useAllCountry;

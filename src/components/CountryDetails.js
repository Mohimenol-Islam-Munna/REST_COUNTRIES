import React from "react";
import { useParams, Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

import useCountryDetails from "../fetchData/useCountryDetails";

const CountryDetails = ({ darkMode }) => {
  const { cc } = useParams();
  const { loading, error, data } = useCountryDetails(cc);

  console.log("react router dom useParams  :cc:", cc);

  console.log("loading :", loading);
  console.log("data :", data);
  console.log("error :", error);

  return (
    <div className={`min-h-[100vh] ${darkMode ? "bg-[#202c37]" : "bg-white"}`}>
      <div className="py-5 w-full sm:w-[85%] mx-auto">
        {/* back  */}
        <div className="my-5">
          <Link to="/">
            <button
              className={`border py-3 px-5 rounded-md flex items-center gap-3 ${
                darkMode ? "text-white" : "text-black"
              } `}
            >
              <BsArrowLeft /> Back To
            </button>
          </Link>
        </div>

        {/* content  */}
        <div className="my-10 flex flex-col sm:flex-row">
          {/* left side image  */}
          <div className="basis-full sm:basis-6/12 sm:pr-10 ">
            <img src={data?.data[0]?.flags?.svg} alt="c_flag" />
          </div>

          {/* right side content  */}
          <div
            className={`basis-full sm:basis-6/12 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <h2 className="text-3xl mb-5 capitalize">
              {data?.data[0]?.name?.common}
            </h2>

            <div className="flex flex-col md:flex-row">
              <div className="basis-full sm:basis-6/12 ">
                <ul>
                  <li className="capitalize">
                    native name : {data?.data[0]?.name?.nativeName?.ben?.common}
                  </li>
                  <li className="capitalize">
                    population : {data?.data[0]?.population}
                  </li>
                  <li className="capitalize">
                    region : {data?.data[0]?.region}
                  </li>
                  <li className="capitalize">
                    sub region : {data?.data[0].name?.common}
                  </li>
                  <li className="capitalize">
                    capital : {data?.data[0]?.capital}
                  </li>
                </ul>
              </div>
              <div className="basis-full sm:basis-6/12">
                <ul>
                  <li className="capitalize">
                    top level domain : {data?.data[0]?.tld}
                  </li>
                  <li className="capitalize">
                    start Of Week : {data?.data[0]?.startOfWeek}
                  </li>
                  <li className="capitalize">
                    languages : {data?.data[0]?.languages?.ben}
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-row flex-wrap">
              <h2 className="capitalize">border countries : </h2>
              <ul className="flex-grow flex flex-row flex-wrap gap-1">
                {data?.data[0]?.borders?.map((border, index) => (
                  <li className="[&>.comma]:last:hidden" key={index}>
                    {" "}
                    {` ${border}`} <span className="comma">,</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;

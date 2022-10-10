import React from "react";
import { useParams, Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

import useCountryDetails from "../fetchData/useCountryDetails";

const CountryDetails = ({ darkMode }) => {
  const { cc } = useParams();
  const { loading, error, data } = useCountryDetails(cc);

  return (
    <div
      className={`min-h-[100vh] ${darkMode ? "bg-[#202c37]" : "bg-[#FAFAFA]"}`}
    >
      <div className="px-2 sm:px-0  py-5 w-full sm:w-[85%] mx-auto">
        {/* back  */}
        <div className="sm:my-5">
          <Link to="/">
            <button
              className={`border py-0.5 sm:py-2 px-1 sm:px-4 rounded-md flex items-center gap-1 sm:gap-3 ${
                darkMode ? "bg-[#2b3945] text-white" : "bg-white text-[#111517]"
              } `}
            >
              <BsArrowLeft /> Back
            </button>
          </Link>
        </div>

        {/* content  */}
        {loading ? (
          <h2 className="text-center text-white text-3xl mt-5">Loading ....</h2>
        ) : error && data === null ? (
          <h2 className="text-center text-red-400 text-3xl mt-5">
            No Country Found
          </h2>
        ) : (
          <div className="my-5 sm:my-10 flex flex-col sm:flex-row">
            {/* left side image  */}
            <div className="basis-full sm:basis-6/12 sm:pr-10 ">
              <img
                src={data?.data[0]?.flags?.svg}
                alt="c_flag"
                className="w-full h-full"
              />
            </div>

            {/* right side content  */}
            <div
              className={`mt-5 sm:mt-0 basis-full sm:basis-6/12 ${
                darkMode ? "text-white" : "text-[#111517]"
              }`}
            >
              <h2 className="text-3xl mb-5 capitalize">
                {data?.data[0]?.name?.common}
              </h2>

              <div className="=flex flex-col md:flex-row">
                <div className="basis-full sm:basis-6/12 ">
                  <ul>
                    <li className="capitalize">
                      native name :{" "}
                      {data?.data[0]?.name?.nativeName?.ben?.common}
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
                <div className="mt-4 md:mt-0 basis-full sm:basis-6/12">
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

              <div className="mt-4 flex flex-row flex-wrap">
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
        )}
      </div>
    </div>
  );
};

export default CountryDetails;

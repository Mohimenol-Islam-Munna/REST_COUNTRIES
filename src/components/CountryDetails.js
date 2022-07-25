import React from "react";
import { useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

import useCountryDetails from "../fetchData/useCountryDetails";

const CountryDetails = () => {
  const { cc } = useParams();
  const { loading, error, data } = useCountryDetails(cc);

  console.log("react router dom useParams  :cc:", cc);

  console.log("loading :", loading);
  console.log("data :", data);
  console.log("error :", error);

  return (
    <div>
      {/* back  */}
      <div>
        <button>
          <BsArrowLeft /> Back
        </button>
      </div>

      {/* content  */}
      <div className="flex flex-col sm:flex-row">
        {/* left side image  */}
        <div className="border border-red-600 basis-full sm:basis-6/12">
          <img src="#" alt="c_flag" />
        </div>

        {/* right side content  */}
        <div className="border border-green-600 basis-full sm:basis-6/12">
          <h2 className="border border-red-500">Country Name :</h2>

          <div className="border border-green-500 flex flex-col sm:flex-row">
            <div className="border-2 border-blue-500 basis-full sm:basis-6/12">
              <ul>
                <li>native name:</li>
                <li>population:</li>
                <li>region:</li>
                <li>sub region</li>
                <li>capital</li>
              </ul>
            </div>
            <div className="border-2 border-red-500 basis-full sm:basis-6/12">
              <ul>
                <li>top level domain:</li>
                <li>currencies:</li>
                <li>languages:</li>
              </ul>
            </div>
          </div>

          <div className="border border-blue-500 flex flex-col sm:flex-row flex-wrap">
            <h2 className="border-2 border-red-500">border countries: </h2>
            <ul className="border-2 border-red-500 flex-grow flex flex-row flex-wrap gap-1">
              <li>srilanka,</li>
              <li>bangladesh,</li>
              <li>india</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;

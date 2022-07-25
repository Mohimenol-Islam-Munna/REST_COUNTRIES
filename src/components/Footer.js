import React from "react";
import {
  TiSocialFacebookCircular,
  TiSocialLinkedinCircular,
} from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="py-3 my-5 bg-[#2b3945] text-white flex flex-col sm:flex-row items-center">
      <h6 className="basis-full sm:basis-4/12 text-center">
        Design Creadit :{" "}
        <a href="https://www.frontendmentor.io" target="_blank">
          Frontend Mentor
        </a>
      </h6>

      <h6 className=" basis-full sm:basis-4/12 text-center">
        Implemented By :{" "}
        <a href="https://mohimenol-islam-munna.netlify.app" target="_blank">
          Md Mohimenol Islam Munna
        </a>
      </h6>
      <p className="basis-full sm:basis-4/12 flex gap-3 justify-center">
        <TiSocialFacebookCircular /> <TiSocialLinkedinCircular />{" "}
      </p>
    </footer>
  );
};

export default Footer;

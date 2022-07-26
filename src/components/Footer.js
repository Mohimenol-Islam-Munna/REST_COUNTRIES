import React from "react";
import {
  TiSocialFacebookCircular,
  TiSocialLinkedinCircular,
} from "react-icons/ti";

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-4 ${darkMode ? "bg-[#2b3945]" : "bg-white"}`}>
      <div
        className={`w-full sm:w-[85%] mx-auto flex flex-col sm:flex-row items-center ${
          darkMode ? "text-white" : "text-[#111517]"
        }`}
      >
        <h6 className="basis-full sm:basis-4/12 text-center">
          Design Creadit :{" "}
          <a
            href="https://www.frontendmentor.io"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
        </h6>

        <h6 className=" basis-full sm:basis-6/12 text-center">
          Implemented By :{" "}
          <a
            href="https://mohimenol-islam-munna.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Md Mohimenol Islam Munna
          </a>
        </h6>
        <p className="basis-full sm:basis-2/12 flex gap-3 justify-center">
          <a
            href="https://www.facebook.com/mohimenol.munna"
            target="_blank"
            rel="noreferrer"
          >
            <TiSocialFacebookCircular />{" "}
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/mohimenol-munna-a54167132/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <TiSocialLinkedinCircular />{" "}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

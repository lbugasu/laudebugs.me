import React from "react";
import GeneralHeader from "../components/GeneralHeader";
import { Link } from "react-router-dom";

const PrivacyNCookies = () => (
  <>
    <div className="notfound">
      <GeneralHeader />
      <h1>Privacy And Cookies Information</h1>
      <h1 className="notfound">
        I am working to give you clearer and more concise information.
        <br /> In the meantime, here's our{" "}
        <Link to="/privacy-policy" key="/pricacy-policy">
          privacy policy
        </Link>
      </h1>
    </div>
  </>
);

export default PrivacyNCookies;

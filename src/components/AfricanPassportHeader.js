import React from "react";
import { Link } from "react-router-dom";
import li from "../css/images/li.png";

const AfricanPassportHeader = () => (
  <>
    <div className="header">
      <h1 className="pageTitle">AFRICAN PASSPORT</h1>

      <div className="li">
        <Link to="/">
          <img className="li" src={li} alt="home"></img>
        </Link>
      </div>
    </div>
  </>
);

export default AfricanPassportHeader;

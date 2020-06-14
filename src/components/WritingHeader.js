import React from "react";
import { Link } from "react-router-dom";
import MenuButton from "../css/images/menubutton.png";
const WritingHeader = ({ section }) => (
  <>
    <div className="topmost">
      <div className="lb">
        <Link className="lb" to="/">
          <h1 className="lb">LB</h1>
        </Link>
      </div>
      <div className="pageTitle">
        <h1>
          <Link key={"/writing"} to={"/writing"} className="mainSection">
            | writing
          </Link>
          <em className="subSection">{section}</em>
        </h1>
      </div>
      <div className="menu">
        <img className="menuButton" src={MenuButton} alt="menu Button" />
      </div>
    </div>
  </>
);

export default WritingHeader;

import React from "react";
import { Link } from "react-router-dom";
import MenuButton from "../css/images/menubutton.png";
const WritingHeader = () => (
  <>
    <div className="topmost">
      <div className="lb">
        <Link className="lb" to="/">
          <h1 className="genNameHead">Laurence.</h1>
        </Link>
      </div>
      <div className="genNav" id="right">
        <Link to="/writing">writing</Link>
        <Link to="/worknotes">worknotes</Link>
        <Link to="/experiments">experiments</Link>
      </div>
    </div>
  </>
);

export default WritingHeader;

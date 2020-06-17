import React from "react";
import { Link } from "react-router-dom";
const NavBarHome = () => (
  <>
    <div className="homeNav">
      <h1 className="laurence">
        LAURENCE<br></br>
        <span className="bugasu">BUGASU</span>
      </h1>
    </div>
    <div className="homeNav" id="right">
      <Link to="/writing">writing</Link>
      <br></br>
      <Link to="/worknotes">worknotes</Link>
      <br></br>
      <Link to="/experiments">experiments</Link>
    </div>
  </>
);

export default NavBarHome;

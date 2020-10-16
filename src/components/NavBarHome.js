import React from "react";
import { Link } from "react-router-dom";
const NavBarHome = () => (
  <>
  <div className="headMenu">
    <div className="homeNav">
      <h1 className="laurence">
        LAURENCE&nbsp;&nbsp;BUGASU.
      </h1>
    </div>
    <div className="homeNav" id="right">
      
      <Link to="/writing">writing</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/projects">projects</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/experiments">experiments</Link>
    </div>
    </div>
  </>
);

export default NavBarHome;

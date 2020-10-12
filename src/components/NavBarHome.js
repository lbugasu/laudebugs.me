import React from "react";
import { Link } from "react-router-dom";
import { HashLink  } from 'react-router-hash-link';
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
      <HashLink to="#projects">projects</HashLink>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/experiments">experiments</Link>
    </div>
    </div>
  </>
);

export default NavBarHome;

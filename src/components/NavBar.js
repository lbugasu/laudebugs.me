import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <>
    <div className="navBar">
      <div className="menuitem">
        <Link to="/writing/notes">notes</Link>
      </div>
      <div className="menuitem">
        <Link to="/writing/letters">letters</Link>
      </div>
      <div className="menuitem">
        <Link to="/writing/poetry">poetry</Link>
      </div>
      <div className="menuitem">
        <Link to="/writing/random">random</Link>
      </div>
      <hr className="menuLines" />
    </div>
  </>
);

export default NavBar;

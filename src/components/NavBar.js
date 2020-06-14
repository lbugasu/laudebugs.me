import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <>
    <div className="navBar">
      <div className="menuitem">
        <Link to="/writing-section/notes">notes</Link>
      </div>
      <div className="menuitem">
        <Link to="/writing-section/letters">letters</Link>
      </div>
      <div className="menuitem">
        <Link to="/writing-section/poetry">poetry</Link>
      </div>
      <div className="menuitem">
        <Link to="/writing-section/random">random</Link>
      </div>
      <hr className="menuLines" />
    </div>
  </>
);

export default NavBar;

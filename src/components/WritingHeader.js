import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line
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
            writing
          </Link>
          <em className="subSection">{section}</em>
        </h1>
      </div>
      <div className="navBar2">
        <div className="menuitem">
          <Link key={"/writing-section/notes"} to={"/writing-section/notes"}>
            notes
          </Link>
        </div>
        <div className="menuitem">
          <Link
            key={"/writing-section/letters"}
            to={"/writing-section/letters"}
          >
            letters
          </Link>
        </div>
        <div className="menuitem">
          <Link key={"/writing-section/poetry"} to={"/writing-section/poetry"}>
            poetry
          </Link>
        </div>
        <div className="menuitem">
          <Link key={"/writing-section/random"} to={"/writing-section/random"}>
            random
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default WritingHeader;

import React from "react";

import { Link } from "react-router-dom";

const WritingFooter = () => (
  <>
    <div className="footer">
      <hr className="footerLines" />
      <div className="footerSection">
        <h3>Subjects</h3>
        <Link to="/subjects/faith">faith</Link>
        <Link to="/subjects/blackness">blackness</Link>
        <Link to="/subjects/pan-africanism">pan-africanism</Link>
        <Link to="/subjects/love">love</Link>
        <Link to="/subjects/death">death</Link>
        <Link to="/subjects/travel">travel</Link>
      </div>
      <div className="footerSection">
        <h3>Sections</h3>
        <Link to="/writing/notes">notes</Link>
        <Link to="/writing/letters">letters</Link>
        <Link to="/writing/poetry">poetry</Link>
        <Link to="/writing/random">random</Link>
      </div>
      <div className="footerSection">
        <h3>More</h3>
        <Link to="/">home</Link>
        <Link to="/writing/upcoming-work">upcoming work</Link>
        <Link to="/writing/gallery">writing gallery</Link>
        <Link to="/work-notes">work notes</Link>
        <Link to="/experiments">experiments</Link>
      </div>
      <div className="footerSection">
        <h3>Contact</h3>
        <Link to="/subscribe">subscribe</Link>
        <Link to="/write-to-me">write to me</Link>
        <Link to="/suggest-changes">suggest changes</Link>
      </div>
    </div>
  </>
);

export default WritingFooter;

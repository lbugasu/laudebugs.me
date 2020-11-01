import React from "react";
import github from "../css/images/github.png";
import resume from "../css/images/resume.webp";
import eyeem from "../css/images/eyeem.png";
import be from "../css/images/be.png"
const FrontImage = () => (
  <>
    <div className="elements">
      <div className="element">
        <a
          href="https://1drv.ms/b/s!AqwJLYjZ0cXAhsdACEGkj8_UGb63cA?e=nTH29J"
          target="__blank"
        >
          <img src={resume} alt="resume"></img>
        </a>
      </div>
      <div className="element">
        <a href="https://www.eyeem.com/u/laudebugs" target="__blank">
          <img src={eyeem} alt="resume"></img>
        </a>
      </div>
      <div className="element">
        <a href="https://github.com/lbugasu" target="__blank">
          <img src={github} alt="resume"></img>
        </a>
      </div>
      <div className="element">
        <a href="https://dev.to/lbugasu">
          <img
            src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
            alt="Laurence Ininda's DEV Profile"
            height="50"
            width="50"
          ></img>
        </a>
      </div>
      <div className="element">
        <a href="https://www.behance.net/laurencebugasu" target="__blank">
          <img src={be} alt="Behance site"></img>
        </a>
      </div>
    </div>
  </>
);

export default FrontImage;

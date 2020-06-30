import React from "react";
import github from "../css/images/github.png";
import resume from "../css/images/resume.webp";
import eyeem from "../css/images/eyeem.png";

const FrontImage = () => (
  <>
    <div className="elements">
      <div className="element">
        <a
          href="https://drive.google.com/file/d/1x_blPPwI99bnaRQtLard7jP9uWL1CPQt/view?usp=sharing"
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
    </div>
  </>
);

export default FrontImage;

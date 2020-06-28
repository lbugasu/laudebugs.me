import React from "react";
// import freshmanYear from "../css/images/freshmanyear.jpg";
import typewriter from "../css/images/typewriter-large.jpg";
const FrontImage = () => (
  <>
    <div className="outerBox">
      {/* <div className="frontImage">
        <img src={freshmanYear} alt="freshman year" />
      </div> */}
      <div className="frontImage">
        <img className="frontMatter" src={typewriter} alt="freshman year" />
      </div>
    </div>
    <div className="years">
      <div className="year">
        <h2 className="yr">2020</h2>
      </div>
      <div className="year">
        <h2 className="yr">2019</h2>
      </div>
      <div className="year">
        <h2 className="yr">2018</h2>
      </div>
      <div className="year">
        <h2 className="yr">2017</h2>
      </div>
      <div className="year">
        <h2 className="yr">2016</h2>
      </div>
    </div>
  </>
);

export default FrontImage;

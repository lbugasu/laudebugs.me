import React from "react";
import freshmanYear from "../css/images/freshmanYear.JPG";

const FrontImage = () => (
  <>
    <div className="outerBox">
      <div className="frontImage">
        <img src={freshmanYear} alt="freshman year" />
      </div>
    </div>
    <div className="years">
      <div className="year">
        <h2>2020</h2>
      </div>
      <div className="year">
        <h2>2019</h2>
      </div>
      <div className="year">
        <h2>2018</h2>
      </div>
      <div className="year">
        <h2>2017</h2>
      </div>
      <div className="year">
        <h2>2016</h2>
      </div>
    </div>
  </>
);

export default FrontImage;

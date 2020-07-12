import React from "react";
import { Link } from "react-router-dom";
import experiments from "../css/images/experiments.png";
const ExperimentsHeader = () => (
  <>
    <div className="topmost">
      <div className="lau">
        <Link className="lb" to="/">
          <h1 className="experimentz">/ˈlɒrəns/.</h1>
        </Link>
      </div>

      <div className="experimentsHeader">
        <h1>Experiments</h1> <img alt="tube" src={experiments}></img>
      </div>

      <div className="experimentsMenu">
        <Link to="/writing">writing</Link>
        <Link to="/worknotes">worknotes</Link>
      </div>
    </div>
  </>
);

export default ExperimentsHeader;

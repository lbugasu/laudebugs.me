import React from "react";
import GeneralHeader from "../components/GeneralHeader";
const NotFoundPage = () => (
  <>
    <div className="notfound">
      <GeneralHeader />
      <h1>404</h1>
      <h1 className="notfound">
        ミ●﹏☉ミ<br></br>
        <br></br> Looks like we <em>can't find</em> what you're looking for
      </h1>
    </div>
  </>
);

export default NotFoundPage;

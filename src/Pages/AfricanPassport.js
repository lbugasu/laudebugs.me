import React from "react";

import AfricanPassportHeader from "../components/AfricanPassportHeader";

import "./css/AfricanPassport.css";

const printMusic = () => {
  const music = require("./music.json");

  return music.map((note) => (
    <>
      <div className="album">
        <div className="albumArt">
          <img src={note.albumArt} alt={note.title}></img>
          <h1 className="albumTitle">
            {note.artist} - {note.title}
          </h1>
        </div>
      </div>
    </>
  ));
};
export default function Page() {
  const AfricanPassport = () => {
    return (
      <>
        <div className="ap">
          <AfricanPassportHeader />
          <div className="musicContent">{printMusic()}</div>
        </div>
      </>
    );
  };
  return <div className="post">{AfricanPassport()}</div>;
}

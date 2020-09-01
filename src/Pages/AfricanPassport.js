import React from "react";

import AfricanPassportHeader from "../components/AfricanPassportHeader";

import "./css/AfricanPassport.css";
import apple from "../css/images/apple.png";
import spotify from "../css/images/spotify.png";
import youtube from "../css/images/youtube.png";
import show from "../css/images/show.png"
import close from "../css/images/close.png"
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
          {/* <div className="button">
          <img className="button" src={show} alt={note.title}></img>
          </div> */}

        </div>
        <div className="listen">
          <a href={note.appleMusic}
            target="__blank"
          >
            <img src={apple} alt="listen on apple music"></img>
          </a>
          <a href={note.spotify}
            target="__blank"
          >
            <img src={spotify} alt="Listen on Spotify"></img>
          </a>
            <a href={note.youtubeMusic}
            target="__blank"
            >
          <img src={youtube} alt="listen on Youtube music"></img>
          </a>
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

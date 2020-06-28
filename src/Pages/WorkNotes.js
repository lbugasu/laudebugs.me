import React from "react";

import GeneralHeader from "../components/GeneralHeader";
export default function WorkNotes() {
  // const fs = require('fs');
  const notes = require("./worknotes.json");

  const printWork = () => {
    return notes.map((note) => (
      <>
        <div className="kazimoja">
          <h1>{note.title}</h1>
          <hr></hr>
          <p>{note.description}</p>
          <img src={note.img} alt={note.description}></img>
          <p>{note.tech.map((t) => " . " + t + " ")}...</p>
          <a
            target="_blank"
            key={note.link}
            rel="noopener noreferrer"
            href={note.link}
          >
            See Work
          </a>
        </div>
        <br className="split"></br>
        <br className="split"></br>
      </>
    ));
  };
  return (
    <>
      <GeneralHeader />
      <div className="mainStuff">
        <div className="side">
          <div className="worknotes">
            <h1>
              &#8212;W&#8212;<em className="invisible">&#8212;&#8212;</em>{" "}
            </h1>
            <h1 className="word">NOTES</h1>
            <h1 className="letter">
              <em className="invisible">&#8212;</em>R
              <em className="invisible">&#8212;&#8212;&#8212;</em>
            </h1>
            <h1 className="letter">
              <em className="invisible">&#8212;</em>K
              <em className="invisible">&#8212;&#8212;&#8212;</em>
            </h1>
          </div>
        </div>
        <div className="main">{printWork()}</div>
      </div>
    </>
  );
}

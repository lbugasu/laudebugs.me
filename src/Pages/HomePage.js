import React from "react";

import NavBarHome from "../components/NavBarHome";
import Elements from "../components/Elements";
import { Link } from "react-router-dom";
import profile from "../css/images/profile.JPG";

export default function Homepage (){
  const notes = require("./projects.json")
  const printHome = ()=>{
    return notes.map((note) => (
      
        <div className="kazimoja">
          <h1 className="workTitle">{note.title}</h1>
          <hr></hr>
          <p>{note.description}</p>
          <img src={note.img} alt={note.description}></img>
          <p>
            Stack:{" "}
            {note.tech  
              .slice(0, note.tech.length - 1)
              .map((t) => " " + t + " | ")}{" "}
            {note.tech[note.tech.length - 1]}
          </p>
          <a
            target="_blank"
            key={note.link}
            rel="noopener noreferrer"
            href={note.link}
          >
            See Work
          </a>
        </div>
    
    ));
  };
  return(
    <>
    
    <NavBarHome />
      <div className = "description">
        <h1 className="description">about me</h1>
        <p className="description">
          A couple of things describe me:<br/> 
          ⭒ Full stack Web developer.<br/> 
          ⭒ I aim to <em>tell stories</em> through my work.<br/> 
          ⭒ I’m serious about my notes, just ask <a href="https://notesikeep.wordpress.com" target="__blank">WordPress☟</a> or look <Link to="/writing">here↗</Link>.<br/> 
          ⭒ I also have an interest in Natural Language Processing and Predictive Analytics.
        </p>
      </div>
      <div className="profileImage">
        
        <img className="profile" src={profile} alt="a picture of me" />
      

      </div>
      <div className="desc2">
        <div className="more">
        <p className="more">❝Opportunities to work on projects alongside other developers in teams has helped me gain perspective in problem solving as well as challenged me to always keep learning and growing personally as well as a programmer.</p>
        </div>
        <div className="skills">
          <h3> Skills:</h3>
          <p>⋄ JavaScript <br/> ⋄ React <br/> ⋄ Node</p>
          <p>⋄ Java <br/>  ⋄ C++ <br/>⋄ Python </p>
          <p> ⋄ NLP <br/> ⋄ AWS</p>
        </div>
      </div>

      <div className="work">
      <h1  className="description">projects</h1>
        
        {printHome()}</div>
      <hr className="homeHr"></hr>
      <p className="poem">
          He who steps into the mist,<br/> 
          Looks into the gaps, <br/> 
          May find a light into the future.
        </p>
      <Elements />
    
    </>
  )
}

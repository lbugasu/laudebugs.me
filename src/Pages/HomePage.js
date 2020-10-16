import React from "react";

import NavBarHome from "../components/NavBarHome";
import Elements from "../components/Elements";
import { Link } from "react-router-dom";
import profile from "../css/images/profile.JPG";

export default function Homepage (){
  const notes = require("./projects.json")
  const printHome = ()=>{
    return notes.map((note) => (
      
        <div id="homeProjects" className="kazimoja">
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
    <div className="homePage">
    <NavBarHome />
      <div className = "description">
        <p>A bit about me シ</p>
        <p className="description">
          <span className="aboutMe">
          I am a <span className="software"> software developer</span> who aims to weave <span className="stories">stories</span> into the products that I build. 
          Through listening and collaboration, I believe that meaningful work comes when we 
          continue to ask the right questions.</span><br/> 
          [I’m also serious about my notes, just ask <a href="https://notesikeep.wordpress.com" target="__blank">WordPress☟</a> or look <Link to="/writing">here↗</Link>.]<br/> 
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
          <h3>Skills ▹</h3>
          <span className="skillsList">
          <p>⋄ JavaScript <br/> ⋄ React <br/> ⋄ Node</p>
          <p>⋄ Java <br/>  ⋄ C++ <br/>⋄ Python </p>
          <p>⋄ NLP <br/> ⋄ AWS</p>
          </span>
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
      </div>
    </>
  )
}

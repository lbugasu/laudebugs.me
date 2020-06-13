import React from "react";
import WritingHeader from "../components/WritingHeader";
import NavBar from "../components/NavBar";
import WritingFooter from "../components/WritingFooter";
const Wriring = () => (
  <>
    <WritingHeader />
    <NavBar />
    <div className="content">
      <div className="feature"></div>
      <div className="other"></div>
      <div className="other"></div>
    </div>
    <div className="playlist">
      <h2>playlist</h2>
      <iframe
        src="https://player.vimeo.com/video/425396315?color=ffffff&badge=0"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
        title="We are George Floyd"
      ></iframe>
      <p>
        <a href="https://vimeo.com/425396315">WE ARE GEORGE FLOYD</a> from{" "}
        <a href="https://vimeo.com/julianmarshall">Julian Marshall</a> on{" "}
        <a href="https://vimeo.com">Vimeo</a>.
      </p>
      <iframe
        src="https://open.spotify.com/embed-podcast/episode/4RfBWD7ODOmxRIi5VdpZMB"
        width="100%"
        height="160"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
        title="Uprising"
      ></iframe>
    </div>
    <WritingFooter />
  </>
);

export default Wriring;

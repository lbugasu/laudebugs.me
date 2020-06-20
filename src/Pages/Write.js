import React from "react";
import NavBarHome from "../components/NavBarHome";
import FrontImage from "../components/FrontImage";
import GeneralHeader from "../components/GeneralHeader";
const Homepage = ({ match }) => (
  <>
    <GeneralHeader />
    <h1 className="write">Write to me</h1>
    <h2 className="write">
      <em>I write back</em> (◍•ᴗ•◍)
    </h2>

    <div className="WriteToMe">
      <form>
        <label>
          <br></br>
          <textarea
            id="thoughts"
            name="message"
            rows="7"
            cols="50"
            placeholder="Have a question or something to share... Or maybe something you'd like to work on together... Type on"
          ></textarea>
        </label>
        <div className="sending">
          <input id="thoughts" name="email" placeholder="your email" required />

          <br></br>
          <div id="send" className="send">
            <button
              id="sendButton"
              data-sitekey="6LcR_aYZAAAAAGbW-vwJK2GG5A06YiLNHR0Ka1pP"
              class="g-recaptcha"
              data-callback="onSubmit"
              data-action="submit"
            >
              - Send away -
            </button>
          </div>
        </div>
      </form>
    </div>
  </>
);

export default Homepage;

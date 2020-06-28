import React, { useState /*useEffect*/ } from "react";
// import NavBarHome from "../components/NavBarHome";
// import FrontImage from "../components/FrontImage";
import GeneralHeader from "../components/GeneralHeader";
// import { Redirect } from "react-router-dom";

export default function Homepage(/*{match}*/) {
  const [message, setMessage] = useState("");
  // const [email, setEmail] = useState('')

  // const sendMessage = async ()=>{
  //   const response = await fetch('http://localhost:8000/api/message',{
  //     method:'post',
  //     mode : 'no-cors',
  //     credentials: 'same-origin',
  //     body:`email=${email}&message=${message}`,
  //     headers: {
  //       // 'Content-Type': 'application/json'
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //   })
  //   const frm = document.getElementById("frm")
  //   const parent = frm.parentElement
  //   parent.removeChild(frm)
  //   const received = document.createElement('div')
  //   received.innerHTML = `
  //   <h3>Thank you - I will be in tough soon(^^)<h3/>
  //   `;
  //   parent.append(received)
  //   // const body = await result.json()
  //   // console.log(body)
  //   // return response.json()
  // }
  const renderPage = () => {
    return (
      <>
        <h1 className="write">Write to me</h1>
        <h2 className="write">
          <em>I write back</em> (◍•ᴗ•◍)
        </h2>
        <div className="WriteToMe">
          <form id="frm" action="/" method="post">
            <label>
              <br></br>
              <textarea
                id="thoughts"
                name="message"
                rows="7"
                cols="50"
                placeholder="Have a question or something to share... Or maybe something you'd like to work on together... Type on"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              ></textarea>
            </label>
            <div className="sending">
              {/* <input id="thoughts" name="email" placeholder="your email" required value={email} onChange={(event)=>setEmail(event.target.value)}/> */}

              <br></br>
              <div id="send" className="send">
                <button
                  id="sendButton"
                  data-sitekey="6LcR_aYZAAAAAGbW-vwJK2GG5A06YiLNHR0Ka1pP"
                  class="g-recaptcha"
                  data-callback="onSubmit"
                  data-action="submit"
                  onClick={() => {
                    window.open(
                      `mailto:lbugasu@gmail.com?subject=Message&body=${message}`
                    );
                    document
                      .getElementById("frm")
                      .addEventListener("submit", function (evt) {
                        evt.preventDefault();
                        setMessage("");
                      });
                    // sendMessage()
                  }}
                >
                  - Send away -
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  };
  return (
    <>
      <GeneralHeader />
      {renderPage()}
    </>
  );
}

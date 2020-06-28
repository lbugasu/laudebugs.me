import React from "react";
import { Link } from "react-router-dom";

import "../components/Posts.less";

import WritingHeader from "../components/WritingHeader";
import WritingFooter from "../components/WritingFooter";

export default function UpcomingWork() {
  return (
    <div className="posts__container">
      <WritingHeader section={"/currently"} />
      <div className="current" id="left">
        <h2>Reading</h2>
        <ul>
          <li>Leopold Senghor: The Collected Poetry</li>

          <li>
            FESTAC 77 - Composed and Collected by{" "}
            <Link
              rel="noopener referrer"
              target="_blank"
              to="https://chimurengachronic.co.za/reproducing-festac-77-a-secret-among-a-family-of-millions/"
            >
              Chimurenga
            </Link>
          </li>
          <li>Every Good Endeavor: Timothy Keller</li>
        </ul>
      </div>
      <div className="current">
        <h2>Writing</h2>
        <p>
          On The African American Student's Foundation, Transitions, Loss and
          Faith
        </p>
      </div>
      <WritingFooter />
    </div>
  );
}

import React, { Component } from "react";
import HomePage from "./Pages/HomePage";
import Experiments from "./Pages/Experiments";
import PostPage from "./Pages/PostPage";
import WorkNotes from "./Pages/WorkNotes";
import Writing from "./Pages/Writing";
import WritingGallery from "./Pages/WritingGallery";
import WriringSectionPage from "./Pages/WritingSubjectPage";
import WriringSubjectPage from "./Pages/WritingSubjectPage";

import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={HomePage} exact />
          <Route path="/writing" component={Writing} exact />
          <Route path="/experiments" component={Experiments} exact />
          <Route path="/post" component={PostPage} exact />
          {/* <Route path="/" component={HomePage} exact />
          <Route path="/" component={HomePage} exact />
          <Route path="/" component={HomePage} exact /> */}
        </div>
      </Router>
    );
  }
}

export default App;

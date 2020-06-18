import React, { Component } from "react";
import HomePage from "./Pages/HomePage";
import Experiments from "./Pages/Experiments";
import PostPage from "./Pages/PostPage";
import WorkNotes from "./Pages/WorkNotes";
import Writing from "./Pages/Writing";
import WritingGallery from "./Pages/WritingGallery";
import WritingSectionPage from "./Pages/WritingSectionPage";
import WritingSubjectPage from "./Pages/WritingSubjectPage";
import UpcomingWork from "./Pages/UpcomingWork"
import Write from "./Pages/Write"

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NotFoundPage from "./Pages/NotFoundPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className="App">
            <Route path="/" component={HomePage} exact />
            <Route path="/writing" component={Writing} exact />
            <Route
              path="/writing-subjects/:subject"
              component={WritingSubjectPage}
              exact
            />
            <Route
              path="/writing-section/:section"
              component={WritingSectionPage}
            />
            <Route path="/experiments" component={Experiments} exact />
            <Route path="/post" component={PostPage} exact />
            <Route path="/writing-gallery" component={WritingGallery} exact />
            <Route path="/writing/:id" component={PostPage} exact />
            <Route path="/worknotes" component={WorkNotes} exact />
            <Route path="/writing-currently" component={UpcomingWork} exact />
            <Route path="/write-to-me" component={Write} exact />

            {/* <Route component={NotFoundPage} exact /> */}
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;

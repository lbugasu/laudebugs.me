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
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NotFoundPage from "./Pages/NotFoundPage";

class App extends Component {
  render() {
    return (
      <Router>

        <div className="App">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/writing" component={Writing} exact />
            <Route
              path="/writing-subjects/:subject"
              component={WritingSubjectPage}

            />
            <Route
              path="/writing-section/:section"
              component={WritingSectionPage}
            />
            <Route path="/experiments" component={Experiments} />
            <Route path="/post" component={PostPage} />
            <Route path="/writing-gallery" component={WritingGallery} />
            <Route path="/writing/:id" component={PostPage} />
            <Route path="/worknotes" component={WorkNotes} />
            <Route path="/writing-currently" component={UpcomingWork} />
            <Route path="/write-to-me" component={Write} />

            <Route component={NotFoundPage} />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;

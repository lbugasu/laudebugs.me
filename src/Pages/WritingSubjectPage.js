import React from "react";
import { Link, useParams } from "react-router-dom";

import WritingHeader from "../components/WritingHeader";
import WritingFooter from "../components/WritingFooter";

export default function WritingSubjectPage() {
  const { subject } = useParams();
  const renderPage = () => {
    return (
      <>
        <WritingHeader section={" on " + subject} />
        <h1>Subjects/Themes page</h1>
        <WritingFooter />
      </>
    );
  };
  return <>{renderPage()}</>;
}

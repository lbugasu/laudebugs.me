import React from "react";
import { Link, useParams } from "react-router-dom";

import WritingHeader from "../components/WritingHeader";
import WritingFooter from "../components/WritingFooter";
import NavBar from "../components/NavBar";
export default function WritingSectionPage() {
  const { section } = useParams();
  const renderPage = () => {
    return (
      <>
        <WritingHeader section={"/" + section} />
        <NavBar />
        <h1>Section!</h1>
        <WritingFooter />
      </>
    );
  };
  return <>{renderPage()}</>;
}

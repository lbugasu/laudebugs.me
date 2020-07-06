import React from "react";
import { Link } from "react-router-dom";

import { useProjects } from "../../custom-hooks/";
import { readableDate } from "../helpers";
import "./Posts.less";
export default function Posts() {
  const [projects, isLoading] = useProjects();

  const renderProjects = () => {
    if (isLoading) return <p>Loading...</p>;

    return projects.map((post) => (
      <Link
        // className="posts__post"
        key={post.fields.slug}
        to={post.fields.slug}
      >
        <small>{readableDate(post.fields.date)}</small>
        <h3>{post.fields.title}</h3>
      </Link>
    ));
  };

  return (
    <div className="posts__container">
      <h2>Articles</h2>

      <div className="posts">{renderProjects()}</div>
    </div>
  );
}

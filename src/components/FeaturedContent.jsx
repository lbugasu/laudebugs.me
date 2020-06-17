import React from "react";
import { Link } from "react-router-dom";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

import { useTaggedPosts } from "../custom-hooks";
import { readableDate } from "./helpers";
import "./SinglePost.less";
export default function SinglePost() {
  const [miniFeatures, miniFeaturesLoading] = useTaggedPosts("miniFeature");

  const otherFeatures = () => {
    if (miniFeaturesLoading) return <p>Loading...</p>;

    return miniFeatures.map((post) => (
      <div key={post.fields.slug} className="miniFeatureOne">
        <img src={post.fields.feature_image.fields.file.url} alt={post.title} />
        <Link
          key={"/writing/" + post.fields.slug}
          to={"/writing/" + post.fields.slug}
          className="preview"
        >
          <small>{readableDate(post.fields.date)}</small>

          <h3>{post.fields.title}</h3>

          <p>{post.fields.description}</p>
          <div
            className="postPreview"
            dangerouslySetInnerHTML={{
              __html:
                documentToHtmlString(post.fields.body).substring(0, 200) +
                "   ... ",
            }}
          ></div>
        </Link>
      </div>
    ));
  };
  return <div className="post">{otherFeatures()}</div>;
}

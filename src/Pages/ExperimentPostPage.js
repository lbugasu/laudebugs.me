import React from "react";
import { useParams } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

import { useSingleExperiment } from "../custom-hooks";
import { readableDate } from "../components/helpers";
import "../components/SinglePost.less";
import ExperimentsHeader from "../components/ExperimentsHeader";

import "./css/ExperimentPostPage.css";
/**
 * One can create a custom component for each element in the content block.
 * Reference: https://github.com/contentful/rich-text/tree/master/packages/rich-text-react-renderer
 * @param {*} param0
 */
const PostImage = ({ alt, url }) => (
  <div className="postImage">
    <img className="image" src={url} alt={alt}></img>
  </div>
);
export default function PostPage() {
  const { id } = useParams();
  const [post, isLoading] = useSingleExperiment(id);

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        console.log(node);
        const title = node.data.target.fields.title;
        const url = "https:" + node.data.target.fields.file.url;
        console.log(url);
        return <PostImage alt={title} url={url} />;
      },
    },
  };
  const renderPost = () => {
    if (isLoading) return <p>Loading...</p>;
    return (
      <>
        <ExperimentsHeader />
        <div className="experimentPost">
          <h1>{post.title}</h1>
          <small>{readableDate(post.date)}</small>
          <br />
          <div className="post_image">
            <img src={post.featureImage.fields.file.url} alt={post.title} />
          </div>
          <div className="expBody">
            {documentToReactComponents(post.body, options)}
          </div>
        </div>
      </>
    );
  };
  return <div className="post">{renderPost()}</div>;
}

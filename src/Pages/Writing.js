import React from "react";
import WritingHeader from "../components/WritingHeader";
import NavBar from "../components/NavBar";
import WritingFooter from "../components/WritingFooter";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

import { Link, useParams } from "react-router-dom";

import { useTaggedPost, useTaggedPosts } from "../custom-hooks";
import { readableDate } from "../components/helpers";

export default function Writing() {
  const { id } = useParams();
  const [post, isLoading] = useTaggedPost("featured");
  // const [miniFeatureOne, miniFeatureOneLoading] = useTaggedPost(
  //   "miniFeatureOne"
  // );
  // const [miniFeatureTwo, miniFeatureTwoLoading] = useTaggedPost(
  //   "miniFeatureTwo"
  // );

  const feature = post;

  const renderPost = () => {
    if (isLoading) return <p>Loading...</p>;
    return (
      <>
        <WritingHeader />
        <NavBar />
        <div className="content">
          <h3 className="featureTitle">Feature</h3>

          <div className="posts">
            <div className="feature">
              <div className="featureTitle">
                <Link
                  key={"/writing/" + feature.slug}
                  to={"/writing/" + feature.slug}
                  className="preview"
                >
                  <h1 className="featureTitle">{feature.title}</h1>
                  <small className="post__intro__date">
                    {readableDate(feature.date)}
                  </small>
                  <div
                    className="featureContent"
                    dangerouslySetInnerHTML={{
                      __html:
                        documentToHtmlString(feature.body).substring(0, 300) +
                        " ... ",
                    }}
                  ></div>
                </Link>
              </div>
              <div className="featuredimage">
                <img
                  src={feature.feature_image.fields.file.url}
                  alt={feature.title}
                />
              </div>
              <hr className="feat"></hr>
            </div>
            {/* <div className="miniFeatureOne">
              <img
                src={miniFeatureOne.feature_image.fields.file.url}
                alt={miniFeatureOne.title}
              />
              <Link
                key={"/writing/" + miniFeatureOne.slug}
                to={"/writing/" + miniFeatureOne.slug}
                className="preview"
              >
                <h1 className="featureTitle">{miniFeatureOne.title}</h1>
                <small className="post__intro__date">
                  {readableDate(miniFeatureOne.date)}
                </small>
                <div
                  className="featureContent"
                  dangerouslySetInnerHTML={{
                    __html:
                      documentToHtmlString(miniFeatureOne.body).substring(
                        0,
                        300
                      ) + " ... ",
                  }}
                ></div>
              </Link>
            </div>
            <div className="miniFeatureTwo">
              <img
                src={miniFeatureTwo.feature_image.fields.file.url}
                alt={miniFeatureTwo.title}
              />
              <Link
                key={"/writing/" + miniFeatureTwo.slug}
                to={"/writing/" + miniFeatureTwo.slug}
                className="preview"
              >
                <h1 className="featureTitle">{miniFeatureTwo.title}</h1>
                <small className="post__intro__date">
                  {readableDate(miniFeatureTwo.date)}
                </small>
                <div
                  className="featureContent"
                  dangerouslySetInnerHTML={{
                    __html:
                      documentToHtmlString(miniFeatureTwo.body).substring(
                        0,
                        300
                      ) + " ... ",
                  }}
                ></div>
              </Link>
            </div> */}
          </div>
        </div>
        <div className="playlist">
          <h2 className="playlist">playlist</h2>
          <iframe
            src="https://player.vimeo.com/video/425396315?color=ffffff&badge=0"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
            title="We are George Floyd"
          ></iframe>
          <p>
            <a href="https://vimeo.com/425396315">WE ARE GEORGE FLOYD</a> from{" "}
            <a href="https://vimeo.com/julianmarshall">Julian Marshall</a> on{" "}
            <a href="https://vimeo.com">Vimeo</a>.
          </p>
          <iframe
            src="https://open.spotify.com/embed-podcast/episode/4RfBWD7ODOmxRIi5VdpZMB"
            width="100%"
            height="160"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
            title="Uprising"
          ></iframe>
        </div>
        <WritingFooter />
      </>
    );
  };
  return <div className="post">{renderPost()}</div>;
}

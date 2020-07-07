
import React from 'react'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { useParams } from 'react-router-dom'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { useSingleExperiment } from '../custom-hooks'

import { readableDate } from '../components/helpers'
import '../components/SinglePost.less'
import ExperimentsHeader from "../components/ExperimentsHeader";

export default function PostPage() {
  const { id } = useParams()
  const [post, isLoading] = useSingleExperiment(id)
  console.log("here in exp post page")
  const renderPost = () => {
    if (isLoading) return <p>Loading...</p>
    return (
      <>
      <ExperimentsHeader/>
      <div className="experimentPost">

          <h1 >{post.title}</h1>
          <small >{readableDate(post.date)}</small>
          <br/>
          <div className="post_image">
            <img
              src={post.featureImage.fields.file.url}
              alt={post.title}
            />
          </div>
        <div className="expBody">{documentToReactComponents(post.body)}</div>
        </div>

      </>
    )
  }
  return (
    <div className="post">
      {renderPost()}
    </div>
  )
}
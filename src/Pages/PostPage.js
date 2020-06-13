import React from 'react'
import { Link, useParams } from 'react-router-dom'
import MD from 'react-markdown'

import { useSinglePost } from '../custom-hooks'
import { readableDate } from '../components/helpers'
import '../components/SinglePost.less'
import WritingHeader from '../components/WritingHeader'
import WritingFooter from '../components/WritingFooter'

export default function PostPage({ match }) {
  const name = match.params.name
  const { id } = useParams()
  const [post, isLoading] = useSinglePost(id)
  const renderPost = () => {
    if (isLoading) return <p>Loading...</p>
    console.log(post)

    return (
      <>
        <WritingHeader />
        <div className="post__intro">
          <h1 className="post__intro__title">{post.title}</h1>
          <small className="post__intro__date">{readableDate(post.date)}</small>
          <p className="post__intro__desc">{post.description}</p>

          <div className="post_image">
            <img
              src={post.feature_image.fields.file.url}
              alt={post.title}
            />
          </div>
        </div>
        <div className="post__body">
          post.body
          <MD source={post.body} />
        </div>
        <WritingFooter />
      </>
    )
  }
  return (
    <div className="post">
      {renderPost()}
    </div>
  )
}
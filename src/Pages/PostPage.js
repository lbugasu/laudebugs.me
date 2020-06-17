
import React from 'react'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { useParams } from 'react-router-dom'

import { useSinglePost } from '../custom-hooks'

import { readableDate } from '../components/helpers'
import '../components/SinglePost.less'
import WritingHeader from '../components/WritingHeader'
import WritingFooter from '../components/WritingFooter'

export default function PostPage() {
  const { id } = useParams()
  const [post, isLoading] = useSinglePost(id)

  const renderPost = () => {
    if (isLoading) return <p>Loading...</p>
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
        <div className="postContent" dangerouslySetInnerHTML={{ __html: documentToHtmlString(post.body) }}>
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
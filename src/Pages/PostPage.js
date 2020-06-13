import React from 'react'
import { Link, useParams } from 'react-router-dom'

import { useSinglePost } from '../custom-hooks'
import { readableDate } from '../components/helpers'
import '../components/SinglePost.less'
import WritingHeader from '../components/WritingHeader'
import WritingFooter from '../components/WritingFooter'
import * as Markdown from 'react-markdown'

export default function PostPage({ match }) {
  const { id } = useParams()
  const [post, isLoading] = useSinglePost(id)
  const markdown = `
This block of Markdown contains <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>, and will require the <code>html-parser</code> AST plugin to be loaded, in addition to setting the <code class="prop">escapeHtml</code> property to false.
`
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
        <div className="post__body">
        <Markdown source={post.body}escapeHtml={false} />
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
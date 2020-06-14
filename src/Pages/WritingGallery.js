import React from 'react'
import { Link } from 'react-router-dom'
import {documentToHtmlString} from '@contentful/rich-text-html-renderer'


import { usePosts } from '../custom-hooks/'
import { readableDate } from '../components/helpers'
import WritingHeader from '../components/WritingHeader'
import WritingFooter from '../components/WritingFooter'

import '../components/Posts.less'
export default function WritingGallery() {
  console.log(usePosts())
  const [posts, isLoading] = usePosts()

  const renderPosts = () => {
    if (isLoading) return <p>Loading...</p>
console.log(posts)
    return posts.map(post => (
      
      <div className="postFrame">
      <Link
              key={'/writing/'+post.fields.slug}
              to={'/writing/'+post.fields.slug}
              className="preview"
            >
      <img
                    src={post.fields.feature_image.fields.file.url}
                    alt={post.title}
                  />
              <small>{readableDate(post.fields.date)}</small>
              
                  <h3>{post.fields.title}</h3>
                  
                  <p>{post.fields.description}</p>
        <div className="postPreview" dangerouslySetInnerHTML={{__html:documentToHtmlString(post.fields.body).substring(0,200)+'   ... '}}></div>
        </Link>   
                 
            </div>
            
    ))
  }

  return (
    <div className="posts__container">
    <WritingHeader section={'/gallery'}/>
      <div className="posts">{renderPosts()}</div>
      <WritingFooter/>
    </div>
  )
}
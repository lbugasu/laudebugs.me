import React from 'react'
const BlogItem = (props) => (
    <div className="box content">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  )
  render() {
    return (
      <div>
        <p>This is the Blog Page</p>
        <br/>
        { this.state.posts.map(({fields}, i) =>
          <BlogItem key={i} {...fields} />
        )}
      </div>
    )
  }
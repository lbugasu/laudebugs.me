import React from 'react'
import * as contentful from 'contentful'

class Blog extends React.Component {  state = {
    posts: []
  }
  client = contentful.createClient({
    space: 'qu10m4oq2u62',
    accessToken: 'f4a9f68de290d53552b107eb503f3a073bc4c632f5bdd50efacc61498a0c592a'
  })
  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }
  fetchPosts = () => this.client.getEntries()
  setPosts = response => {
    this.setState({
      posts: response.items
    })
  }
  render() {
    return (
      <p>This is the Blog Page</p>
    )
  }
}
export default Blog
render() {
    return (
      <div>
        <p>This is the Blog Page</p>
        <br/>
        { this.state.posts.map(({fields}, i) =>
          <pre key={i}>{JSON.stringify(fields, null, 2)}</pre>
        )}
      </div>
    )
  }
  
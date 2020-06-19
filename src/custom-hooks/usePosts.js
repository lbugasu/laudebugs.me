import { useEffect, useState } from 'react'
import { readableDate } from "../components/helpers";

import { getBlogPosts } from '../contentful'

const promise = getBlogPosts()

export default function usePosts() {
  const [posts, setPosts] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    promise.then(blogPosts => {
      const posts = blogPosts.sort(function (a, b) {
        // console.log(readableDate(a.fields.date))
        // console.log(readableDate(b.fields.date))

        if (readableDate(a.fields.date) > readableDate(b.fields.date)) return 1
        else if (readableDate(a.fields.date) < readableDate(b.fields.date)) return -1
        else return 0
        
      })
      console.log(blogPosts)

      console.log(posts)
      setPosts(posts)
      setLoading(false)
    })
  }, []);
  return [posts, isLoading]
}
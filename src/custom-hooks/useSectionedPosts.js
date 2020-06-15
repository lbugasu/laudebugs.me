import { useEffect, useState } from 'react'

import { getSectionedPosts } from '../contentful'

export default function useTaggedPost(tag) {
  const promise = getSectionedPosts(tag)

  const [post, setPost] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    promise.then(result => {
      console.log(result)
      setPost(result)
      setLoading(false)
    })
  }, [])

  return [post, isLoading]
}
import { useEffect, useState } from 'react'

import { getTaggedPost } from '../contentful'

export default function useTaggedPost(tag) {
  const promise = getTaggedPost(tag)

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
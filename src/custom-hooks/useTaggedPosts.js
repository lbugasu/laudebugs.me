import { useEffect, useState } from 'react'

import { getTaggedPost } from '../contentful'

export default function useTaggedPost(tag) {
  const promise = getTaggedPost(tag)

  const [post, setPost] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    promise.then(result => {
      setPost(result)
      setLoading(false)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [post, isLoading]
}
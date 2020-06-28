import { useEffect, useState } from "react";

import { getSectionedPosts } from "../contentful";

export default function useTaggedPost(tag) {
  const promise = getSectionedPosts(tag);

  const [post, setPost] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    promise.then((result) => {
      setPost(result);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tag]);

  return [post, isLoading];
}

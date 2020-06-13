const client = require("contentful").createClient({
  space: "rnmht6wsj5nl",
  accessToken: "HM9Ully-63TrAHVbrqokqNSantt5YHUnAKncqtIYo4U",
});

const getBlogPosts = () =>
  client.getEntries().then((response) => response.items);

const getSinglePost = (slug) =>
  client
    .getEntries({
      "fields.slug": slug,
      content_type: "blogPost",
    })
    .then((response) => response.items);

export { getBlogPosts, getSinglePost };

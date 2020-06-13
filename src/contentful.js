const client = require("contentful").createClient({
  space: "<my_space_id>",
  accessToken: "<my_access_token>",
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

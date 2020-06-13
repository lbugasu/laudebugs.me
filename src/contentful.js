const client = require("contentful").createClient({
  space: "rnmht6wsj5nl",
  accessToken: "_AsjIH6r4ph08uPsSxi_61X8pBSjVP_PSOKOBXpObCM",
});

const getBlogPosts = () =>
  client.getEntries().then((response) => response.items);

const getSinglePost = (slug) =>
  client
    .getEntries({
      "fields.slug": slug,
      content_type: "post",
    })
    .then((response) => response.items);

export { getBlogPosts, getSinglePost };

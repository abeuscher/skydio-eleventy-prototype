const contextCache = require("../_utils/data/contextCache");
const getPosts = require("../_data/blogPosts");
const { createIndexPages } = require("../_utils/data/postIndexPages");

module.exports = () => contextCache("blog-indexes", async function () {
  const posts = await getPosts();
  return createIndexPages("blog", posts);
});

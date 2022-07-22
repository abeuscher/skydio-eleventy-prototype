const {createIndexPages} = require("../_utils/data/postIndexPages");
const contextCache = require("../_utils/data/contextCache");
const getPosts = require("../_data/threedscans");

module.exports = contextCache("threedscan-indexes", async function () {
  const posts = await getPosts();
  return createIndexPages("3d-scan-gallery", posts);
});

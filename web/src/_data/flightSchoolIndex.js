const {createIndexPages} = require("../_utils/data/postIndexPages");
const contextCache = require("../_utils/data/contextCache");
const getPosts = require("../_data/flightschool");

module.exports = contextCache("flightschool-indexes", async function () {
  const posts = await getPosts();
  return createIndexPages("flight-school", posts);
});

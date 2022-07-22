const groq = require("groq");
const client = require("../_utils/data/sanityClient");
const contextCache = require("../_utils/data/contextCache");

module.exports = contextCache("settings", async function () {
  return await client.fetch(groq`
    *[_type == "siteConfig"]{
      ...,
    }[0]
  `);
});

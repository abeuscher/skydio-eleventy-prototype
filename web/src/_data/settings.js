const groq = require("groq");
const client = require("../_utils/data/sanityClient");
module.exports = async function () {
  return await client.fetch(groq`
    *[_type == "siteConfig"]{
      ...,
    }[0]
  `);
};

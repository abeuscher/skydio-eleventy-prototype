const groq = require("groq");
const client = require("../_utils/sanityClient");
module.exports = async function () {
  const homeid = await client.fetch(groq`
    *[_type == "siteConfig"]{
      ...,
    }[0].frontpage._ref
  `);
  return await client.fetch(
    groq`
*[_type == "landingPage" && _id==$homeid]{
      ...,
    }[0]
  `,
    { homeid: homeid }
  );
};

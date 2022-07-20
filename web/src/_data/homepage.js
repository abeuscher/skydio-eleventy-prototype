const groq = require("groq");
const client = require("../_utils/sanityClient");
const query = require("../utils/query");
const createPageContext = require("../utils/createPageContext");
const client = require("../utils/sanityClient");

const homepageQuery = `*[_type == "landingPage" && _id==$homeid] {
      ...,
    }[0]`;

const getHomepage = async () => {
  const config = await query.getSiteConfig();
  return await client.fetch(homepageQuery, { homeid: config.frontpage._ref });
};

module.exports = async function () {
  const data = await getHomepage();
  return [createPageContext(data)];
};

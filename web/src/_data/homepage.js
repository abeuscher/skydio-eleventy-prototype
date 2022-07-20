const query = require("../_utils/data/query");
const createPageContext = require("../_utils/data/createPageContext");
const client = require("../_utils/data/sanityClient");

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

const client = require("../utils/sanityClient");

const documentsByTypeWithDraftsQuery = `{
    'drafts': *[ _type == $type && _id in path("drafts.**") ]._id,
    'published': *[ _type == $type && !(_id in path("drafts.**"))]._id,
  }
  {
    'current': published[ !("drafts." + @ in ^.drafts) ] + drafts
  }
  {
    'results': *[_id in ^.current]
  }`;

const documentsByTypeQuery = `{
    'results': *[_type == $type && !(_id in path("drafts.**"))]
    }`;

const homepageQuery = `*[_type == "landingPage" && _id==$homeid] {
      ...,
    }[0]`;

const siteConfigQuery = `*[_type == "siteConfig"] {
      ...,
    }[0]`;

const queryDocuments = async (type, includeDrafts = false) => {
  // TODO: set includeDrafts to true if we're in preview mode
  const query =
    includeDrafts || !process.env.NODE_ENV || process.env.NODE_END === "development"
      ? documentsByTypeWithDraftsQuery
      : documentsByTypeQuery;
  const results = await client
    .fetch(query, { type: "landingPage" })
    .catch((err) => console.error(err));
  return results.results || [];
};

const queryHomepage = async () => {
  const config = await client.fetch(siteConfigQuery);
  return await client.fetch(homepageQuery, { homeid: config.frontpage._ref });
};

module.exports = {
  getDocuments: queryDocuments,
  getHomepage: queryHomepage,
};

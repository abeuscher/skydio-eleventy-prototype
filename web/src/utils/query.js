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

const siteConfigQuery = `*[_type == "siteConfig"] {
      ...,
    }[0]`;

const querySiteConfig = async () => {
  return client.fetch(siteConfigQuery);
}

const queryDocuments = async (type, includeDrafts = false) => {
  // TODO: set includeDrafts to true if we're in preview mode
  const query =
    includeDrafts || !process.env.NODE_ENV || process.env.NODE_ENV === "development"
      ? documentsByTypeWithDraftsQuery
      : documentsByTypeQuery;
  const results = await client
    .fetch(query, { type })
    .catch((err) => console.error(err));
  return results.results || [];
};

module.exports = {
  getDocuments: queryDocuments,
  getSiteConfig: querySiteConfig,
};

const client = require("../_utils/data/sanityClient.js");
const contextCache = require("../_utils/data/contextCache");
const { createContextForPages } = require("../_utils/data/createPageContext");
const { createDraftQuery } = require("../_utils/data/query");

async function getPosts() {
  // Learn more: https://www.sanity.io/docs/data-store/how-queries-work
  const query = createDraftQuery(
    `_type == "episode" && defined(content.main.slug) && content.main.publishedAt < now() && !defined(i18n_lang)`,
    `| order(publishedAt asc) {
    _id,
    publishedAt,
    content{
      main {
        ...,
        slug {
          ...
        }
      }
    },
  }`,
    ``
  );
  const generatePath = (doc) => {
    return `/${[doc.i18n_lang, "flight-school", doc.content.main.slug.current]
      .filter((part) => part)
      .join("/")}`;
  };
  const docs = await client.fetch(query).catch((err) => console.error(err));
  return createContextForPages(docs.results, generatePath);
}

module.exports = () => contextCache("flightschool", getPosts);

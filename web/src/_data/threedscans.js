const client = require("../_utils/data/sanityClient.js");
const contextCache = require("../_utils/data/contextCache");
const { createContextForPages } = require("../_utils/data/createPageContext");
const {createDraftQuery} = require("../_utils/data/query");

async function getPosts() {
  const query = createDraftQuery(
    `_type == "model" && defined(content.main.slug) && !defined(i18n_lang)`,
    `{
    ...,
    content{
      main {
        ...
      }
    },
  }`
  );
  const generatePath = (doc) => {
    return `/${[doc.i18n_lang, "3d-scan-gallery", doc.content.main.slug.current]
      .filter((part) => part)
      .join("/")}`;
  };

  const docs = await client.fetch(query).catch((err) => console.error(err));
  return await createContextForPages(docs.results, generatePath);
}

module.exports = () => contextCache("threedscans", getPosts);

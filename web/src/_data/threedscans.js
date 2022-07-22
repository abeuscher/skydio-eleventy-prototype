const BlocksToMarkdown = require("@sanity/block-content-to-markdown");
const groq = require("groq");
const client = require("../_utils/data/sanityClient.js");
const serializers = require("../_utils/serializers");
const overlayDrafts = require("../_utils/data/overlayDrafts");
const hasToken = !!client.config().token;
const contextCache = require("../_utils/data/contextCache");
const { createContextForPages } = require("../_utils/data/createPageContext");

async function getPosts() {
  // Learn more: https://www.sanity.io/docs/data-store/how-queries-work
  const filter = groq`*[_type == "model" && defined(content.main.slug) && !defined(i18n_lang)]`;
  const projection = groq`{
    ...,
    content{
      main {
        ...
      }
    },
  }`;
  const generatePath = (doc) => {
    return `/${[doc.i18n_lang, "3d-scan-gallery", doc.content.main.slug.current]
      .filter((part) => part)
      .join("/")}`;
  };
  const query = [filter, projection].join(" ");
  const docs = await client.fetch(query).catch((err) => console.error(err));
  const reducedDocs = overlayDrafts(hasToken, docs);
  const preparePosts = await createContextForPages(docs, generatePath);
  return preparePosts;
}

module.exports = contextCache("threedscans", getPosts);

const BlocksToMarkdown = require("@sanity/block-content-to-markdown");
const groq = require("groq");
const client = require("../_utils/data/sanityClient.js");
const overlayDrafts = require("../_utils/data/overlayDrafts");
const contextCache = require("../_utils/data/contextCache");
const {createContextForPages} = require("../_utils/data/createPageContext");
const hasToken = !!client.config().token;

async function getPosts() {
  // Learn more: https://www.sanity.io/docs/data-store/how-queries-work
  const filter = groq`*[_type == "episode" && !(_id in path("drafts.**")) && defined(content.main.slug) && content.main.publishedAt < now() && !defined(i18n_lang)]`;
  const projection = groq`{
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
  }`;
  const generatePath = (doc) => {
    return `/${[doc.i18n_lang, "flight-school", doc.content.main.slug.current]
      .filter((part) => part)
      .join("/")}`;
  };
  const order = `| order(publishedAt asc)`;
  const query = [filter, projection, order].join(" ");
  const docs = await client.fetch(query).catch((err) => console.error(err));
  const preparePosts = await createContextForPages(docs, generatePath);
  return preparePosts;
}

module.exports = contextCache("flightschool", getPosts);

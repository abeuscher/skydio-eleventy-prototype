const BlocksToMarkdown = require("@sanity/block-content-to-markdown");
const groq = require("groq");
const client = require("../_utils/sanityClient.js");
const serializers = require("../_utils/serializers");
const overlayDrafts = require("../_utils/overlayDrafts");
const hasToken = !!client.config().token;

function generatePost(post) {
  return {
    ...post,
  };
}

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
  const query = [filter, projection].join(" ");
  const docs = await client.fetch(query).catch((err) => console.error(err));
  const reducedDocs = overlayDrafts(hasToken, docs);
  const preparePosts = reducedDocs.map(generatePost);
  return preparePosts;
}

module.exports = getPosts;

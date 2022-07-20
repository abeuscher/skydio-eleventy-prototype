const BlocksToMarkdown = require("@sanity/block-content-to-markdown");
const groq = require("groq");
const client = require("../_utils/sanityClient.js");
const overlayDrafts = require("../_utils/overlayDrafts");
const hasToken = !!client.config().token;

function generatePost(post) {
  return {
    ...post,
  };
}

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
  const order = `| order(publishedAt asc)`;
  const query = [filter, projection, order].join(" ");
  const docs = await client.fetch(query).catch((err) => console.error(err));
  const preparePosts = docs.map(generatePost);
  return preparePosts;
}

module.exports = getPosts;

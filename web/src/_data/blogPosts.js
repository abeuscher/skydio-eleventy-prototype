const groq = require("groq");
const client = require("../_utils/data/sanityClient.js");
const {createContextForPages} = require("../_utils/data/createPageContext");
const contextCache = require("../_utils/data/contextCache");

async function getPosts() {
  // Learn more: https://www.sanity.io/docs/data-store/how-queries-work
  const filter = groq`*[_type == "post" && defined(content.main.slug) && content.main.publishedAt < now()]`;

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
    return `/${[doc.i18n_lang, "blog", doc.content.main.slug.current]
      .filter((part) => part)
      .join("/")}`;
  };
  const order = `| order(content.main.publishedAt asc)`;
  const query = [filter, projection, order].join(" ");
  const docs = await client.fetch(query).catch((err) => console.error(err));
  const preparePosts = await createContextForPages(docs, generatePath);
  return preparePosts;
}

module.exports = () => contextCache("posts", getPosts);

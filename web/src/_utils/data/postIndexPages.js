const { createContextForPages } = require("./createPageContext");
const { createDraftQuery } = require("./query");
const client = require("./sanityClient.js");

const PAGE_SIZE = 10;

const generatePostIndexes = async function (indexSlug, posts, indexDocument) {
  // TODO: Get Index page content for locale
  const numPages = Math.ceil(posts.length / PAGE_SIZE);
  const postIndexes = [];

  const generatePath = (doc) => {
    return `/${[doc.i18n_lang, indexSlug, doc.page > 1 ? `${doc.page}` : null]
      .filter((part) => part)
      .join("/")}`;
  };

  for (let i = 0; i < numPages; i++) {
    const postsForPage = posts.slice(i * PAGE_SIZE, (i + 1) * PAGE_SIZE);
    const d = indexDocument;
    const page = {
      posts: postsForPage,
      page: i + 1,
      numPages,
      ...d,
      content: {
        ...d.content,
        main: {
          ...d.content.main,
          slug: {
            ...d.content.main.slug,
            current: `${indexSlug}${i > 0 ? `/${i + 1}` : ""}`,
          },
        },
      },
    };
    postIndexes.push(page);
  }

  const results = await createContextForPages(postIndexes, generatePath);
  return results;
};

const createIndexPages = async function (indexSlug, posts = []) {
  const postsByLocale = {};
  const indexDocumentResults = await client.fetch(
    createDraftQuery(`content.main.slug.current == "${indexSlug}"`, ``)
  );

  if (!indexDocumentResults?.results?.length) {
    return [];
  }

  const indexDocument = indexDocumentResults.results[0];

  posts.forEach((post) => {
    const locale = post.i18n_lang || "en-us";
    if (!postsByLocale[locale]) {
      postsByLocale[locale] = [];
    }
    postsByLocale[locale].push(post);
  });

  const results = await Promise.all(
    Object.keys(postsByLocale).map(
      async (locale) => await generatePostIndexes(indexSlug, postsByLocale[locale], indexDocument)
    )
  );

  return results.flat();
};

module.exports = {
  generatePostIndexes,
  createIndexPages,
};

const contextCache = require("../_utils/data/contextCache");
const getPosts = require("./blogposts");
const { createContextForPages } = require("../_utils/data/createPageContext");
const PAGE_SIZE = 10;

const generatePostIndexes = async function (posts, locale) {
  // TODO: Get Index page content for locale
  const numPages = Math.ceil(posts.length / PAGE_SIZE);
  const postIndexes = [];

  const generatePath = (doc) => {
    return `/${[doc.i18n_lang, "blog", doc.page > 1 ? `/${doc.page}` : ""]
      .filter((part) => part)
      .join("/")}`;
  };

  for (let i = 0; i < numPages; i++) {
    const postsForPage = posts.slice(i * PAGE_SIZE, (i + 1) * PAGE_SIZE);
    const page = {
      posts: postsForPage,
      page: i + 1,
      numPages,
      content: {
        main: {
          title: `Blog (Hardcoded) Get Index page`,
        },
      },
    };
    postIndexes.push(page);
  }

  return createContextForPages(postIndexes, generatePath);
};

module.exports = contextCache("blog-indexes", async function () {
  const posts = await getPosts();
  const postsByLocale = {};

  posts.forEach((post) => {
    const locale = post.i18n_lang || "en-us";
    if (!postsByLocale[locale]) {
      postsByLocale[locale] = [];
    }
    postsByLocale[locale].push(post);
  });

  const results = await Promise.all(
    Object.keys(postsByLocale).map(
      async (locale) => await generatePostIndexes(postsByLocale[locale], locale)
    )
  );

  return results.flat();
});

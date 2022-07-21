const getPosts = require("./blogposts");
const PAGE_SIZE = 10;

const generatePostIndexes = async function (posts, locale) {
  const numPages = Math.ceil(posts.length / PAGE_SIZE);
  const postIndexes = [];

  for (let i = 0; i < numPages; i++) {
    const postsForPage = posts.slice(i * PAGE_SIZE, (i + 1) * PAGE_SIZE);
    const path = `/${locale === "en-us" ? "" : `${locale}/`}blog/page${i > 0 ? `/${i + 1}` : ""}`;
    const page = {
      path,
      context: {
        posts: postsForPage,
        locale,
        page: i + 1,
        numPages,
      },
    };
    postIndexes.push(page);
  }

  return postIndexes;
};

module.exports = async function () {
  const posts = await getPosts();
  const postsByLocale = {};

  posts.forEach((post) => {
    const locale = post.i18n_lang || "en-us";
    if (!postsByLocale[locale]) {
      postsByLocale[locale] = [];
    }
    postsByLocale[locale].push(post);
  });

  const results = await Promise.all(Object.keys(postsByLocale).map(async (locale) =>
    await generatePostIndexes(postsByLocale[locale], locale)
  ));

  return results.flat();
};

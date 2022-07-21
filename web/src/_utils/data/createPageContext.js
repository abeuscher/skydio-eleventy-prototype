const getHeaderFooter = require("./headerFooter");
const { getActiveLanguagePaths, createLanguagePaths } = require("../i18n/languagePaths");

const createPageContext = async function (doc) {
  const locale = doc.i18n_lang ? doc.i18n_lang.toLowerCase() : "en-us";
  const headerFooter = await getHeaderFooter(locale);
  return {
    ...headerFooter,
    data: doc,
    locale,
    localePath: `${doc.i18n_lang ? `${doc.i18n_lang}/` : ""}`,
    isProduction: process.env.NODE_ENV === "production",
    baseUrl:
      process.env.SANITY_DATASET === "staging"
        ? "https://staging--skydio.netlify.app"
        : "https://skydio.com",
  };
};

const createContextForPages = async function (pages, generatePath) {
  const languagePaths = createLanguagePaths(pages, generatePath);

  return await Promise.all(
    pages.map(async (page) => {
      const context = await createPageContext(page);
      const pageLanguagePaths = languagePaths[page.content.main.slug.current];
      const alternateLocalePaths = getActiveLanguagePaths(pageLanguagePaths);

      return {
        ...context,
        alternateLocalePaths,
        permaLink:
          languagePaths[page.content.main.slug.current][page.i18n_lang || "en-us"].path.substring(1),
      };
    })
  );
};

module.exports = {
  createPageContext,
  createContextForPages,
};

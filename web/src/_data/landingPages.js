const query = require("../_utils/data/query");
const { createContextForPages } = require("../_utils/data/createPageContext");
const contextCache = require("../_utils/data/contextCache");

module.exports = contextCache("landingPages", async function () {
  const config = await query.getSiteConfig();
  const docs = await query.getDocuments("landingPage", true);
  const homepage = docs.filter((context) => context._id === config.frontpage._ref).pop();

  if (homepage) {
    homepage.content.main.slug.current = "";
  }

  const generatePath = (doc) => {
    return `/${[
      doc.i18n_lang,
      doc.content.main.slug.current,
      doc.content.main.parent?.content?.main?.slug?.current,
    ]
      .filter((part) => part)
      .join("/")}`;
  };

  return await createContextForPages(docs, generatePath);
});

const query = require("../_utils/data/query");
const { AssetCache } = require("@11ty/eleventy-fetch");
const {createContextForPages} = require("../_utils/data/createPageContext");

module.exports = async function () {
  // TODO: Create a method to wrap this functionality to use on all data not required
  //       for the preview.
  if (process.env.ELEVENTY_SERVERLESS) {
    const cacheDir = process.env.NODE_ENV !== "development" ? "cache" : ".cache";
    const assetCache = new AssetCache("landingPages", cacheDir, {
      duration: "*",
    });
    const cachedValue = await assetCache.getCachedContents("json");
    if (cachedValue) {
      return cachedValue;
    }
  }

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

  const contexts = await createContextForPages(docs, generatePath);

  const assetCache = new AssetCache("landingPages", ".cache", {
    duration: "*",
  });

  await assetCache.save(docs, "json");

  return contexts;
};

const query = require("../_utils/data/query");
const createPageContext = require("../_utils/data/createPageContext");
const { AssetCache } = require("@11ty/eleventy-fetch");

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

  const contexts = await Promise.all(
    docs.map(async (doc) => {
      const context = await createPageContext(doc);
      context.permaLink = `${context.localePath}${context.data.content.main.slug.current}`;
      return context;
    })
  );

  const assetCache = new AssetCache("landingPages", ".cache", {
    duration: "*",
  });
  await assetCache.save(docs, "json");

  return contexts;
};

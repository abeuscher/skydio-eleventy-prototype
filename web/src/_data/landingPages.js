const query = require("../utils/query");
const createPageContext = require("../utils/createPageContext");
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

  const docs = await query.getDocuments("landingPage", true);
  const contexts = docs.map((doc) => createPageContext(doc));

  const assetCache = new AssetCache("landingPages", ".cache", {
    duration: "*",
  });
  await assetCache.save(docs, "json");

  return contexts;
};
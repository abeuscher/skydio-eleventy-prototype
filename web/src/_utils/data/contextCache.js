const { AssetCache } = require("@11ty/eleventy-fetch");
const fs = require("fs");

module.exports = async (key, dataFunction) => {
  if (!process.env.ELEVENTY_SERVERLESS || process.env.CACHE_ENABLED === "true") {
    const cacheDir = process.env.NODE_ENV !== "development" ? "cache" : ".cache";
    const assetCache = new AssetCache(key, cacheDir, {
      duration: "*",
    });
    const path = assetCache.getCachedContentsPath("json");
    if (fs.existsSync(path)) {
      const cachedValue = await assetCache.getCachedContents("json");

      if (cachedValue) {
        return cachedValue;
      }
    }
  }

  return async () => {
    const data = await dataFunction();

    const assetCache = new AssetCache("landingPages", ".cache", {
      duration: "*",
    });
    await assetCache.save(data, "json");

    return data;
  };
};

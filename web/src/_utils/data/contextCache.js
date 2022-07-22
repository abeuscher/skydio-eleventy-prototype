const { AssetCache } = require("@11ty/eleventy-fetch");
const fs = require("fs");

module.exports = async (key, dataFunction) => {
  if (
    (!process.env.ELEVENTY_SERVERLESS && process.env.NODE_ENV !== "development") ||
    process.env.ENABLE_CACHE === "true"
  ) {
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

  const data = await dataFunction();

  const assetCache = new AssetCache(key, ".cache", {
    duration: "*",
  });
  await assetCache.save(data, "json");

  return data;
};

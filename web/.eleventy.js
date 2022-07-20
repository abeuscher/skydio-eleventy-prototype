const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");
const stylesPlugin = require("./src/_utils/plugins/styles");
const buildPlugin = require("./src/_utils/plugins/build");
const imagePlugin = require("./src/_utils/plugins/imageUrl");
const devToolsPlugin = require("./src/_utils/plugins/developmentTools");
const sanityClient = require("./src/_utils/data/sanityClient");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(stylesPlugin);
  eleventyConfig.addPlugin(buildPlugin);
  eleventyConfig.addPlugin(imagePlugin, { client: sanityClient });

  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "ssr",
    functionsDir: "./netlify/functions/",
    copy: ["src/_utils/", "src/_styles/", "src/client-config.js", { from: ".cache", to: "cache" }],
  });

  eleventyConfig.addPlugin(devToolsPlugin);

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};

const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");
const util = require("util");
const buildStyles = require("./src/utils/plugins/buildStyles");
const renderPugPlugin = require("./src/utils/plugins/renderPug");
const classNames = require("./src/utils/classNames");
const imagePlugin = require("./src/utils/plugins/imageUrl")
const sanityClient = require("./src/utils/sanityClient");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("debug", function (value) {
    return util.inspect(value, { compact: false });
  });
  eleventyConfig.addPlugin(buildStyles);
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "ssr",
    functionsDir: "./netlify/functions/",
    copy: ["src/utils/", "src/styles/", "src/client-config.js", { from: ".cache", to: "cache" }],
  });
  eleventyConfig.addPlugin(renderPugPlugin);
  eleventyConfig.addFilter("classnames", classNames);
  eleventyConfig.addPlugin(imagePlugin, { client: sanityClient });
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};

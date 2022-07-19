const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");
const util = require("util");
// const pluginSass = require("eleventy-plugin-sass");
const buildStyles = require("./src/utils/buildStyles");
const renderPugPlugin = require("./src/utils/renderPug");
const classNames = require("./src/utils/classNames");
const imagePlugin = require("./src/utils/plugins/imageUrl")
const sanityClient = require("./src/utils/sanityClient");
const fs = require("fs");
const path = require("path");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("debug", function (value) {
    return util.inspect(value, { compact: false });
  });
  // eleventyConfig.addPlugin(pluginSass);
  // eleventyConfig.addShortcode("imageUrlFor", (image, width = "400") => {
  //   return urlFor(image).width(width).auto("format");
  // });
  // eleventyConfig.addShortcode("croppedUrlFor", (image, width, height) => {
  //   return urlFor(image).width(width).height(height).auto("format");
  // });
  eleventyConfig.addPlugin(buildStyles);
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "ssr",
    functionsDir: "./netlify/functions/",
    copy: ["src/utils/", "src/styles/", "src/client-config.js", { from: ".cache", to: "cache" }],
  });
  eleventyConfig.addFilter("checkExists", function (value) {
    if (!value) return null;
    const pathToCheck = path.join(__dirname, `src/_includes/${value._type}/index.liquid`);
    return fs.existsSync(pathToCheck) ? value : null;
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

const util = require("util");
const pluginSass = require("eleventy-plugin-sass");
const urlFor = require("./src/_utils/imageUrl");
const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("debug", function (value) {
    return util.inspect(value, { compact: false });
  });
  eleventyConfig.addFilter("console", function (value) {
    return console.log(value);
  });

  eleventyConfig.addPlugin(pluginSass);
  eleventyConfig.addShortcode("imageUrlFor", (image, width = "400") => {
    return urlFor(image).width(width).auto("format");
  });
  eleventyConfig.addShortcode("croppedUrlFor", (image, width, height) => {
    return urlFor(image).width(width).height(height).auto("format");
  });
  eleventyConfig.addPassthroughCopy({
    "node_modules/normalize.css/normalize.css": "css/normalize.css",
  });
  eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if (outputPath.endsWith(".html")) {
      return htmlmin.minify(content, {
        collapseWhitespace: true,
        conservativeCollapse: true,
        removeComments: true,
        useShortDoctype: true,
      });
    }

    return content;
  });
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};

const util = require("util");
const pluginSass = require("eleventy-plugin-sass");
const urlFor = require("./src/utils/imageUrl");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("debug", function (value) {
    return util.inspect(value, { compact: false });
  });
  eleventyConfig.addPlugin(pluginSass);
  eleventyConfig.addShortcode("imageUrlFor", (image, width = "400") => {
    return urlFor(image).width(width).auto("format");
  });
  eleventyConfig.addShortcode("croppedUrlFor", (image, width, height) => {
    return urlFor(image).width(width).height(height).auto("format");
  });
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};

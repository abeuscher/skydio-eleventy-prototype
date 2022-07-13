const util = require("util");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("debug", function (value) {
    return util.inspect(value, { compact: false });
  });
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};

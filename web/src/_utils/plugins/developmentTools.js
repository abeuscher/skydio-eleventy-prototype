const util = require("util");

module.exports = (eleventyConfig) => {
  if (process.env.NODE_ENV && process.env.NODE_ENV !== "development") {
    return;
  }

  eleventyConfig.addFilter("debug", function (value) {
    return util.inspect(value, { compact: false });
  });

  eleventyConfig.addFilter("console", function (value) {
    return console.log(value);
  });
};

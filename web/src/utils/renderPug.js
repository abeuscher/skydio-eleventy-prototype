const crypto = require("crypto");
const pug = require("pug");
const path = require("path");

const rendered = {};
let developmentMode = false;

const renderPug = function (pugFile, data) {
  const key = crypto.createHash("md5").update(`${pugFile}${data}`).digest("hex");

  if (!developmentMode && rendered[key]) {
    return rendered[key];
  }

  rendered[key] = pug.renderFile(path.join(__dirname, `../_includes/${pugFile}`), data);

  return rendered[key];
};

module.exports = (eleventyConfig) => {
  developmentMode = !process.env.NODE_ENV || process.env.NODE_ENV === "development";
  eleventyConfig.addShortcode("pug", renderPug);
};

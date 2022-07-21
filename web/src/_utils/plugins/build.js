const crypto = require("crypto");
const pug = require("pug");
const path = require("path");
const htmlmin = require("html-minifier");
const {setLanguages} = require("../i18n/languagePaths");

const rendered = {};
let developmentMode = false;

const buildPug = function (pugFile, data) {
  const key = crypto.createHash("md5").update(`${pugFile}${data}`).digest("hex");

  if (!developmentMode && rendered[key]) {
    return rendered[key];
  }

  rendered[key] = pug.renderFile(path.join(__dirname, `../../_includes/${pugFile}`), data);

  return rendered[key];
};

setLanguages(["en-us", "en-au"]);

module.exports = (eleventyConfig) => {
  developmentMode = !process.env.NODE_ENV || process.env.NODE_ENV === "development";
  eleventyConfig.addShortcode("pug", buildPug);
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
};

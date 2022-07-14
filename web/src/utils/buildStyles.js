const fs = require("fs");
const path = require("path");
const sass = require("node-sass");

const globalStyles = sass.renderSync({
  file: path.join(__dirname, "../styles/style.scss"),
});

// TODO: Remove all keys from moduleStyles on rebuild
const moduleStyles = {};

const buildStyles = (context) => {
  const modules = context?.data?.content?.main?.modules || [];
  const styles = modules.map((module) => {
    const moduleStylesPath = path.join(
      __dirname,
      `../_includes/modules/${module._type}/styles.scss`
    );

    if (
      moduleStyles[moduleStylesPath] &&
      process.env.NODE_ENV &&
      process.env.NODE_ENV !== "development"
    ) {
      return moduleStyles[moduleStylesPath];
    }

    if (fs.existsSync(moduleStylesPath)) {
      moduleStyles[moduleStylesPath] = sass.renderSync({
        file: moduleStylesPath,
      }).css;

      return moduleStyles[moduleStylesPath];
    }

    return "";
  });

  return `${globalStyles.css}${styles.join("")}`;
};

module.exports = (eleventyConfig) => {
  eleventyConfig.addShortcode("inlineStyles", function (data, value = null) {
    return `<style>${buildStyles(data)}</style>`;
  });
};

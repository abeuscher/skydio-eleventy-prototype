const fs = require("fs");
const path = require("path");
const sass = require("sass");

// TODO: Remove all keys from moduleStyles on rebuild
const moduleStyles = {};

const buildStyles = (context) => {
  const modules = context?.data?.content?.main?.modules || [];
  const styles = modules.map((module) => {
    const moduleStylesPath = path.join(
      __dirname,
      `../../_includes/modules/${module._type}/styles.scss`
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

  return styles.join("");
};

module.exports = (eleventyConfig) => {
  eleventyConfig.addTemplateFormats("scss");

  // Creates the extension for use
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css", // optional, default: "html"

    // can be an async function
    compile: function (inputContent, inputPath) {
      let parsed = path.parse(inputPath);
      if (parsed.name.startsWith("_")) {
        return;
      }

      const nodePath = path.join(__dirname, "../../../node_modules/");
      let result = sass.compile(inputPath, {
        loadPaths: [parsed.dir || ".", this.config.dir.includes, nodePath],
      });

      return (data) => {
        return result.css;
      };
    },
  });

  eleventyConfig.addShortcode("inlineStyles", function (data, value = null) {
    return `<style>${buildStyles(data)}</style>`;
  });
};

const { kebabCase } = require("lodash");

const getPathWithBase = ({ base = "blog", slug = {} }) => {
  return `/${base}/${slug.current || slug}`;
};

const getCategoryUrl = ({ base = "blog", slug }) => {
  return `/${base}/category/${slug.current || slug}`;
};

const mapEdgesToNodes = (data) => {
  if (!data.edges) {
    return [];
  }

  return data.edges.map((edge) => edge.node);
};

const toPlainText = (blocks) => {
  if (!blocks) {
    return "";
  }
  return blocks
    .map((block) => {
      if (block._type !== "block" || !block.children) {
        return "";
      }
      return block.children.map((child) => child.text).join("");
    })
    .join("\n\n");
};

/**
 * Gets the first block based on the order of the styles array
 *
 * @
 * @param {array} blocks
 * @returns {Object}
 */
const getBlockContentPreview = (blocks) => {
  let preview;
  const styles = ["h1", "h2", "h3", "h4", "subtitle", "normal"];

  for (const style of styles) {
    const match = (blocks || []).find((block) => block._type === "block" && block.style === style);

    if (match) {
      preview = match;
      break;
    }
  }

  return preview;
};

const moduleClassName = (_type) => {
  const cssRoot = kebabCase(_type).replace("-module", "");
  return `module module--${cssRoot} ${cssRoot}`;
};

const scrollToAnchor = (event, hash) => {
  if (typeof window !== "undefined") {
    event.preventDefault();
    const rect = document.querySelector(hash).getBoundingClientRect();
    const scrollTop = window.pageYOffset;

    window.scroll({
      top: rect.top + scrollTop,
      behavior: "smooth",
    });

    window.history.replaceState(null, null, hash);
  }
};

/**
 * Test if a conditional link is set
 *
 * @
 * @param {*} sanityLink `link` schema object
 * @returns {boolean}
 */
const linkIsSet = (sanityLink) => {
  if (!sanityLink) {
    // If sanityLink is null or undefined
    return false;
  }

  if (sanityLink._type === "link") {
    // If sanityLink has a conditional between internal and external
    return !!sanityLink[sanityLink?.condition]?.link || !!sanityLink[sanityLink?.condition]?.path;
  }

  // sanityLink is set explicitly to either internal or external
  return !!sanityLink.link || !!sanityLink.path;
};

/**
 * Test if a path starts with exactly one slash.
 * Components assumes that any internal link (intended for Gatsby)
 * will start with a slash, and that anything else is external.
 *
 * @param {string} path
 * @returns {boolean}
 */
const startsWithSingleSlash = (path) => {
  return /^\/(?!\/)/.test(path);
};

/**
 * Test if a path starts with #.
 * This will indicate an anchor link
 *
 * @param {string} path
 * @returns {boolean}
 */
const startsWithHash = (path) => {
  return /^#/g.test(path);
};

/**
 * Adds search params to a URL
 *
 * @
 * @param {string} url
 * @param {Object} [paramsToAdd={}]
 * @returns {string}
 */
const addUrlParams = (url, paramsToAdd = {}) => {
  const newUrl = new URL(url);
  const searchParams = newUrl.searchParams;

  Object.keys(paramsToAdd).forEach((key) => {
    searchParams.set(key, paramsToAdd[key]);
  });

  newUrl.search = searchParams;

  return newUrl.toString();
};

/**
 * Removes the `drafts.` path from a document's id
 *
 * @
 * @param {string} id
 * @returns {string}
 */
const stripDraftsFromId = (id) => {
  return id.replace(/^drafts\./, "");
};

module.exports = {
  getPathWithBase,
  getCategoryUrl,
  mapEdgesToNodes,
  toPlainText,
  getBlockContentPreview,
  moduleClassName,
  scrollToAnchor,
  linkIsSet,
  startsWithSingleSlash,
  startsWithHash,
  addUrlParams,
  stripDraftsFromId,
};

const sanitySlug = (sanityLink) => {
  if (!sanityLink) {
    return false;
  }
  if (!sanityLink.condition) {
    return false;
  }
  return sanityLink.condition === "internalLink"
    ? sanityLink.internalLink.path
      ? sanityLink.internalLink.path
      : sanityLink.internalLink._ref
    : sanityLink.externalLink.path;
};

module.exports = sanitySlug;

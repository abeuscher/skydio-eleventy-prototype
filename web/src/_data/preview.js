const query = require("../utils/query");
const createPageContext = require("../utils/createPageContext");

module.exports = async (data) => {
  const pageId = data?.eleventy?.serverless?.path?.id;

  if (pageId) {
    const pageData = await query.getDocument(pageId);

    if (!pageData) {
      return {};
    }

    return createPageContext(pageData);
  }

  // Get page data depending on type

  return {};
};

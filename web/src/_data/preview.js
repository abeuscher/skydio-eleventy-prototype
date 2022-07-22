const query = require("../_utils/data/query");
const { createPageContext } = require("../_utils/data/createPageContext");

module.exports = async (data) => {
  const pageId = data?.eleventy?.serverless?.path?.id;

  if (pageId) {
    const pageData = await query.getDocument(pageId);

    if (!pageData) {
      return {};
    }

    const context = await createPageContext(pageData);
    return context;
  }

  // Get page data depending on type

  return {};
};

const query = require("../utils/query");
const createPageContext = require("../utils/createPageContext");

module.exports = async function () {
  const docs = await query.getDocuments("landingPage", true);
  return docs.map(doc => createPageContext(doc));
};

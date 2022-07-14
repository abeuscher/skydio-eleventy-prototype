const query = require("../utils/query");
const createPageContext = require("../utils/createPageContext");

module.exports = async function (data, data2) {
  const docs = await query.getDocuments("landingPage", true);


  return await docs.map(doc => createPageContext(doc));
};

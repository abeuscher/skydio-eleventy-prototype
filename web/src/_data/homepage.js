const query = require("../utils/query");
const createPageContext = require("../utils/createPageContext");

module.exports = async function () {
  const data = await query.getHomepage();
  return [createPageContext(data)];
};

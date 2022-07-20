const getHeaderFooter = require("./headerFooter");

module.exports = async function (doc) {
  const locale = doc.i18n_lang ? doc.i18n_lang.toLowerCase() : "en-us";
  const headerFooter = await getHeaderFooter(locale);
  return {
    ...headerFooter,
    data: doc,
    locale,
    localePath: `${doc.i18n_lang ? `${doc.i18n_lang}/` : ""}`,
    isProduction: process.env.NODE_ENV === "production",
    baseUrl: process.env.SANITY_DATASET === "staging" ? "https://staging--skydio.netlify.app" : "https://skydio.com",
  };
};

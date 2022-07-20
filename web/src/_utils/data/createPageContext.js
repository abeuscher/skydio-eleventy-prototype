module.exports = function (doc) {
  const locale = doc.i18n_lang ? doc.i18n_lang.toLowerCase() : "en-us";
  // Get header applicable to the current locale
  const header = {};
  // Get footer applicable to the current locale
  const footer = {};

  return {
    header: {},
    footer: {},
    data: doc,
    locale: locale,
    localePath: `${doc.i18n_lang ? `${doc.i18n_lang}/` : ""}`,
    isProduction: process.env.NODE_ENV === "production",
    baseUrl: process.env.SANITY_DATASET === "staging" ? "https://staging--skydio.netlify.app" : "https://skydio.com",
  };
};

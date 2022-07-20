module.exports = function (doc) {
  return {
    header: {},
    footer: {},
    data: doc,
    locale: doc.i18n_lang ? doc.i18n_lang.toLowerCase() : "en-us",
    localePath: `${doc.i18n_lang ? `${doc.i18n_lang}/` : ""}${doc?.content?.main?.slug?.current}`,
  };
};

const enabledLanguages = [];

const setLanguages = languages => {
  enabledLanguages.push(...languages);
};

const createLanguagePaths = (pages, getPath) => {
  const languagePaths = {};

  pages.forEach(page => {
    const lang = page.i18n_lang ?? 'en-us';

    const pagePath =
      page.content.main?.slug?.current ??
      page.content.main?.parent?.slug?.current;

    if (!languagePaths[pagePath]) {
      languagePaths[pagePath] = {};
    }

    languagePaths[pagePath][lang] = {
      path: getPath(page),
      inUse: enabledLanguages.indexOf(lang) > -1,
    };
  });

  return languagePaths;
};

const getActiveLanguagePaths = (paths = []) => {
  return Object.assign(
    {},
    ...Object.keys(paths)
      .filter(k => paths[k].inUse)
      .map(l => ({ [l]: paths[l].path })),
  );
};

module.exports = {
  createLanguagePaths,
  setLanguages,
  getActiveLanguagePaths,
};

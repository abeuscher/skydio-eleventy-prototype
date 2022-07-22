const client = require("../../_utils/data/sanityClient");

let headerNavigation = {};
let footerNavigation = {};

const navQuery = `{
  ...,
  items[] {
  ...,
  }
}`;

const getHeaderFooter = async (locale) => {
  locale = locale || "en-us";

  if (Object.keys(headerNavigation).length === 0 && Object.keys(footerNavigation).length === 0) {
    const navResults = await client.fetch(
      `
    {
      'header': *[_type == 'navigation' && slug.current == 'header'] ${navQuery},
      'footer': *[_type == 'navigation' && slug.current == 'footer'] ${navQuery}
     }
  `
    );
    const getNavDict = (navs) =>
      Object.assign(
        ...navs.map((nav) => ({
          [nav.i18n_lang || "en-us"]: nav || {},
        }))
      );

    headerNavigation = getNavDict(navResults.header);
    footerNavigation = getNavDict(navResults.footer);
  }

  return {
    header: headerNavigation[locale] || headerNavigation["en-us"] || {},
    footer: footerNavigation[locale] || footerNavigation["en-us"] || {},
  };
};

module.exports = getHeaderFooter;

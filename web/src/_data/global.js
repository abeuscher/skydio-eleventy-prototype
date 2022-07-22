const client = require("../_utils/data/sanityClient");
const contextCache = require("../_utils/data/contextCache");

module.exports = contextCache("global", async () => {
  const data = await client.fetch(`
  {
    'global': *[_type == 'siteGlobal'][0],
  }`);

  return {
    meta: data?.global?.content?.globalMeta,
    social: data?.global?.content?.social,
    logo: data?.global?.content?.logo,
    // This was originally 'site' not 'base'
    base: {
      // TODO: See if this can be removed, it's static data within the old site
      //       and not needed for the new site, plus move it to a config file.
      meta: {
        title: "Skydio",
        description:
          "Skydio offers fully autonomous drones for business, public safety and creative endeavors.",
        author: "Skydio",
        url: "https://www.skydio.com",
        siteUrl: "https://www.skydio.com",
        stagingUrl: "https://staging--skydio.netlify.app",
      },
    },
  };
});

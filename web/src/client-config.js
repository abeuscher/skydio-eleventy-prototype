module.exports = {
  sanity: {
    projectId: process.env.SANITY_PROJECT_ID || "",
    dataset: process.env.SANITY_DATASET || "develop-skydio-new",
    apiVersion: "2022-01-01",
  },
};

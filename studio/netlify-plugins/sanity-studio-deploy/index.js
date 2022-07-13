module.exports = {
  onPreBuild: async ({ utils: { build, status, run } }) => {
    // Deploying to production should not be the default
    const dataset = process.env.SANITY_STUDIO_API_DATASET || 'staging';

    status.show({
      title: 'Deploying GraphQL',
      summary: `Deploying GraphQL to Sanity. Using the ${dataset} dataset.`,
    });

    try {
      await run.command(
        `sanity graphql deploy --dataset ${dataset} --playground --force`,
      );
    } catch (error) {
      build.cancelBuild(
        `Something went wrong when deploying the GraphQL schema. ${error}`,
      );
    }

    status.show({
      title: 'GraphQL deployment complete',
      summary: `Looks like everything went well. Deployed the ${dataset} dataset.`,
    });
  },
};

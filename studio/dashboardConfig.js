export default {
  widgets: [
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fa318a86b88073e1990da2e',
                  title: 'Website',
                  name: 'skydio',
                  apiId: '5776fd2a-7bc6-4757-8938-25a29c3af829',
                },
              ],
            },
          },
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pixelunion/skydio-sanity',
            category: 'Code',
          },
          {
            title: 'Frontend',
            value: 'https://skydio.netlify.app',
            category: 'apps',
          },
        ],
      },
    },
    { name: 'project-users', layout: { height: 'auto' } },
  ],
};

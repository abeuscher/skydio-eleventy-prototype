export default {
  title: 'Stats and Video Module',
  name: 'statsAndVideoModule',
  type: 'object',
  fields: [
    {
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        {
          type: 'singleStat',
        },
      ],
    },
    {
      title: 'Video',
      name: 'video',
      type: 'video',
    },
    {
      title: 'Show Disclaimer?',
      name: 'showDisclaimer',
      type: 'boolean',
    },
  ],
  preview: {
    prepare: () => {
      return {
        title: 'Stats and Video',
      };
    },
  },
};

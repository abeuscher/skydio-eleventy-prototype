export default {
  title: 'Video Group',
  name: 'videoGroup',
  type: 'object',
  fields: [
    {
      title: 'Group Title',
      name: 'groupTitle',
      type: 'string',
    },
    {
      title: 'Button Section Label',
      name: 'buttonSectionLabel',
      type: 'string',
    },
    {
      title: 'Videos',
      name: 'videos',
      type: 'array',
      of: [
        {
          type: 'videoWithButton',
        },
      ],
    },
  ],
};

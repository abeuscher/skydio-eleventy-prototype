export default {
  title: 'Nav Group',
  name: 'navGroup',
  type: 'object',
  fields: [
    {
      name: 'parentLink',
      title: 'Parent Link',
      type: 'navLink',
    },
    {
      name: 'subLinks',
      title: 'Sub Links',
      type: 'array',
      of: [{ type: 'navLink' }],
    },
  ],
  preview: {
    select: {
      label: 'parentLink.label',
    },
    prepare: ({ label }) => {
      return {
        title: label,
      };
    },
  },
};

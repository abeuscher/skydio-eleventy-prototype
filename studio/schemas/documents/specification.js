export default {
  name: 'specification',
  type: 'document',
  title: 'Specification',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'groups',
      title: 'Specification Groups',
      type: 'array',
      of: [{ type: 'specificationGroup' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};

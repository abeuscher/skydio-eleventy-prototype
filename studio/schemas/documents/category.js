export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'content',
      type: 'categoryContent',
    },
  ],
  preview: {
    select: {
      title: 'content.main.title',
    },
  },
};

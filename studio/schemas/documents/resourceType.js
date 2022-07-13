export default {
  name: 'resourceType',
  type: 'document',
  title: 'Resource Type',
  fields: [
    {
      name: 'content',
      type: 'categoryContent',
    },
  ],
  preview: {
    select: {
      title: 'content.main.title',
      lang: 'i18n_lang',
    },
  },
};

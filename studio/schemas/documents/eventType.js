export default {
  name: 'eventtype',
  type: 'document',
  title: 'Event Type',
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

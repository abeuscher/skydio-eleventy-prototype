export default {
  title: 'Collection Content',
  name: 'collectionMain',
  type: 'object',
  hidden: true,
  fieldsets: [
    {
      name: 'modules',
      title: 'Collection Modules',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      readOnly: true,
      description: 'This is set in Shopify and cannot be changed',
      options: {
        source: 'content.main.title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'modules',
      title: 'Modules',
      type: 'productModules',
      fieldset: 'modules',
    },
  ],
};

export default {
  title: 'Variant Content',
  name: 'variantMain',
  type: 'object',
  hidden: true,
  fieldsets: [
    {
      name: 'modules',
      title: 'Variant Modules',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'main',
      title: 'Variant Main Content',
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
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fieldset: 'main',
    },
    {
      name: 'variantDescription',
      title: 'Variant Description',
      type: 'blockContent',
      fieldset: 'main',
    },
  ],
};

export default {
  name: 'press',
  type: 'document',
  title: 'Press',
  fieldsets: [
    {
      name: 'content',
      title: 'Content Settings',
    },
    {
      name: 'annotations',
      title: 'Article Annotations',
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      fieldset: 'content',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'blockText',
      fieldset: 'content',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'figure',
      fieldset: 'content',
    },
    {
      name: 'cta',
      title: 'Call to Action',
      type: 'buttonSimple',
      fieldset: 'content',
      validation: Rule => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      fieldset: 'annotations',
      validation: Rule => Rule.max(new Date().toISOString()),
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      fieldset: 'annotations',
      description: 'Shows on featured article and overrides published at date',
    },
  ],
};

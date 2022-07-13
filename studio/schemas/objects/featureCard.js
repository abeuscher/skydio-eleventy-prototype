export default {
  title: 'Feature Card',
  name: 'featureCard',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body Text',
      type: 'blockText',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'figure',
      options: {
        collapsible: false,
      },
    },
  ],
};

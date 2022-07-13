export default {
  name: 'eventlocation',
  type: 'document',
  title: 'Event Location',
  fields: [
    {
      name: 'title',
      title: 'Full name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
  ],
};

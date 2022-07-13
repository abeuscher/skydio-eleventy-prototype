export default {
  name: 'resource',
  type: 'document',
  title: 'Resource Tile',
  fields: [
    {
      name: 'content',
      type: 'resourceContent',
    },
  ],
  orderings: [
    {
      name: 'publishDateAsc',
      title: 'Publish date, New',
      by: [
        {
          field: 'content.main.publishedAt',
          direction: 'desc',
        },
      ],
    },
    {
      name: 'publishDateDesc',
      title: 'Publishing date, Old',
      by: [
        {
          field: 'content.main.publishedAt',
          direction: 'asc',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'content.main.title',
    },
  },
};

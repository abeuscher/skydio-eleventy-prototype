export default {
  name: 'episode',
  title: 'Episode',
  type: 'document',
  fields: [
    {
      name: 'content',
      type: 'episodeContent',
    },
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date, New',
      by: [
        {
          field: 'content.main.publishedAt',
          direction: 'desc',
        },
      ],
    },
    {
      name: 'publishingDateDesc',
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
      publishedAt: 'content.main.publishedAt',
      media: 'content.main.mainImage',
    },
    prepare({ title = 'No title', publishedAt, media }) {
      return {
        title,
        media,
        subtitle: publishedAt ? publishedAt : 'Missing publishing date',
      };
    },
  },
};

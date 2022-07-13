export default {
  name: 'newsroom',
  title: 'Newsroom Page',
  type: 'document',
  fields: [
    {
      name: 'content',
      type: 'newsroomContent',
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

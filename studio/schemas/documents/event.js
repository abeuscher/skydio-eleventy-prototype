export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'content',
      type: 'eventContent',
    },
  ],
  orderings: [
    {
      name: 'startTimeAsc',
      title: 'Start Time, New',
      by: [
        {
          field: 'content.main.startTime',
          direction: 'desc',
        },
      ],
    },
    {
      name: 'startTimeDesc',
      title: 'Start time, Old',
      by: [
        {
          field: 'content.main.startTime',
          direction: 'asc',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'content.main.title',
      startTime: 'content.main.startTime',
      media: 'content.main.mainImage',
    },
    prepare({ title = 'No title', startTime, media }) {
      return {
        title,
        media,
        subtitle: startTime ? startTime : 'Missing publishing date',
      };
    },
  },
};

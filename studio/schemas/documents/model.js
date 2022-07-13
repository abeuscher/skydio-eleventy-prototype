export default {
  name: 'model',
  title: 'Model',
  type: 'document',
  fields: [
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
    },
    {
      name: 'content',
      type: 'modelContent',
    },
  ],
  orderings: [
    {
      name: 'orderAsc',
      title: 'Model Number, Low',
      by: [
        {
          field: 'order',
          direction: 'asc',
        },
      ],
    },
    {
      name: 'orderDesc',
      title: 'Model Number, High',
      by: [
        {
          field: 'order',
          direction: 'desc',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'content.main.title',
      modelNumber: 'order',
      media: 'content.main.mainImage',
    },
    prepare({ title = 'No title', modelNumber, media }) {
      return {
        title,
        media,
        subtitle:
          modelNumber === null || modelNumber === undefined
            ? 'No model number set'
            : `Model ${modelNumber + 1}`,
      };
    },
  },
};

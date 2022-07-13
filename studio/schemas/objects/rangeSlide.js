export default {
  name: 'rangeSlide',
  title: 'Slide Data',
  type: 'object',
  fields: [
    {
      title: 'Slide Title',
      name: 'slideTitle',
      type: 'string',
    },
    {
      title: 'Slide Image',
      name: 'slideImage',
      type: 'image',
    },
    {
      title: 'Slide Bar Values',
      name: 'slideBarValues',
      type: 'array',
      of: [{ type: 'rangeSlideBarSet' }],
    },
  ],
};

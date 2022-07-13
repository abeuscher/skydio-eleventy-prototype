export default {
  title: 'Slide Bar Set',
  name: 'rangeSlideBarSet',
  type: 'object',
  fields: [
    {
      title: 'Bar Title',
      name: 'barTitle',
      type: 'string',
    },
    {
      title: 'Bar Title Image',
      name: 'barTitleImage',
      description: 'Note: If provided, image will override text label',
      type: 'image',
    },
    {
      title: 'Bar Values',
      name: 'barValues',
      type: 'array',
      of: [{ type: 'rangeSlideBar' }],
    },
  ],
};

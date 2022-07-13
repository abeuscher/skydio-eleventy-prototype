const mediaLayout = {
  name: 'mediaLayout',
  title: 'Layout Style',
  type: 'string',
  description:
    'Set whether the media will be contained to the max-width, full width or match the content width. Default is "Contained"',
  options: {
    list: [
      { title: 'Full', value: 'full' },
      { title: 'Contained', value: 'contained' },
      { title: 'Content', value: 'content' },
    ],
  },
  initialValue: 'contained',
};

export default mediaLayout;

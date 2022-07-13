export default {
  title: 'Video With Button',
  name: 'videoWithButton',
  type: 'object',
  fields: [
    {
      title: 'Button Label',
      name: 'buttonLabel',
      type: 'string',
    },
    {
      title: 'Button Icon Inactive',
      name: 'buttonIconInactive',
      type: 'image',
    },
    {
      title: 'Button Icon Hover',
      name: 'buttonIconHover',
      type: 'image',
    },
    {
      title: 'Button Icon Active',
      name: 'buttonIconActive',
      type: 'image',
    },
    {
      title: 'Button Icon Clicked',
      name: 'buttonIconClicked',
      type: 'image',
    },
    {
      title: 'Video',
      name: 'video',
      type: 'video',
    },
  ],
  preview: {
    select: {
      buttonLabel: 'buttonLabel',
    },
    prepare: ({ buttonLabel }) => {
      return {
        title: buttonLabel,
      };
    },
  },
};

export default {
  name: 'hero2UpBlock',
  title: 'Hero Block',
  type: 'object',
  fields: [
    {
      name: 'badge',
      title: 'Badge',
      type: 'string',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'text',
      rows: 2,
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      rows: 2,
    },
    {
      name: 'button',
      title: 'Button',
      type: 'button',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'figure',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      description: 'Leave blank for no background image',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'subheading',
    },
  },
};

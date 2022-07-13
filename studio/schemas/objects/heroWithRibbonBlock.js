export default {
  name: 'heroWithRibbonBlock',
  title: 'Hero Ribbon Block',
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
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [
        {
          type: 'button',
        },
      ],
    },
    {
      title: 'Text Position',
      name: 'textposition',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
      },
      initialValue: 'left',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'figure',
    },
    {
      name: 'mobileImage',
      title: 'Mobile Image',
      type: 'image',
    },
    {
      name: 'ribbonImageDesktop',
      title: 'Ribbon Image Desktop',
      type: 'image',
    },
    {
      name: 'ribbonImageMobile',
      title: 'Ribbon Image Mobile',
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

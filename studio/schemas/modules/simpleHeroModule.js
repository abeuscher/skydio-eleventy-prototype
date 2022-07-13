export default {
  title: 'Simple Hero Module',
  name: 'simpleHeroModule',
  type: 'object',
  fields: [
    {
      title: 'Logo',
      name: 'logo',
      type: 'image',
    },
    {
      title: 'Sub Header',
      name: 'subheader',
      type: 'text',
      rows: 2,
    },
    {
      title: 'Header Image',
      name: 'headerImage',
      type: 'image',
    },
    {
      title: 'Background Image',
      name: 'bgImage',
      type: 'image',
    },
    {
      title: 'Mobile Header Image',
      name: 'mobileHeaderImage',
      type: 'image',
    },
    {
      title: 'Buttons',
      name: 'buttons',
      type: 'array',
      of: [{ type: 'button' }],
    },
  ],
  preview: {
    select: {
      title: 'subheader',
    },
    prepare: ({ title }) => {
      return {
        title: 'Simple Hero',
        subtitle: title,
      };
    },
  },
};

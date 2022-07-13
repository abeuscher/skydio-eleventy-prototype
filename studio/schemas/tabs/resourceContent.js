export default {
  name: 'resourceContent',
  type: 'object',
  title: 'Resource',
  fieldsets: [{ name: 'main', title: 'Main' }],
  fields: [
    {
      name: 'main',
      type: 'resourceTileMain',
      options: {
        collapsible: false,
      },
    },
  ],
};

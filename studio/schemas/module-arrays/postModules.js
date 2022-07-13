export default {
  title: 'Post Modules',
  name: 'postModules',
  type: 'array',
  of: [
    {
      type: 'blockContentModule',
    },
    {
      type: 'sketchfabModule',
    },
    {
      type: 'blogCtaModule',
    },
    {
      type: 'disclaimerModule',
    },
  ],
  initialValue: [
    {
      _type: 'blogCtaModule',
    },
  ],
};

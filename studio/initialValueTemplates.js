import T from '@sanity/base/initial-value-template-builder';

export default [
  ...T.defaults(),

  T.template({
    id: 'header',
    title: 'Header',
    schemaType: 'navigation',
    value: () => {
      return {
        _type: 'navigation',
        items: [],
        slug: {
          _type: 'slug',
          current: 'header',
        },
      };
    },
  }),
  T.template({
    id: 'footer',
    title: 'Footer',
    schemaType: 'navigation',
    value: () => {
      return {
        _type: 'navigation',
        items: [],
        slug: {
          _type: 'slug',
          current: 'footer',
        },
      };
    },
  }),
];

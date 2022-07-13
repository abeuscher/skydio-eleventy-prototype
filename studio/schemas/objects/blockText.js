// See https://www.sanity.io/docs/block-type#customizing-wx1MT31k for all config options
export default {
  title: 'Standard Text',
  name: 'blockText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [{ title: 'Normal', value: 'normal' }],
      lists: [],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [
          {
            name: 'internalLink',
            title: 'Link to internal page',
            type: 'internalLink',
          },
          {
            name: 'externalLink',
            title: 'Link to external page',
            type: 'externalLink',
          },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: '',
    },
    prepare(selection) {
      return Object.assign({}, selection, {
        title: 'Standard Text',
      });
    },
  },
};

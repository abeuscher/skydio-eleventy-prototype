export default {
  name: 'blockContentModule',
  title: 'Rich Text',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      blocks: 'text',
    },
    prepare({ blocks = [] }) {
      const blockContent = blocks.find(block => block._type === 'block');
      return {
        title: 'Block Content',
        subtitle:
          blockContent &&
          blockContent.children.reduce(
            (a, c) => c._type === 'span' && c.text,
            '',
          ),
      };
    },
  },
};

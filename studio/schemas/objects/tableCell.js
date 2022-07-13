export default {
  name: 'tableCell',
  type: 'document',
  title: 'Table Cell',
  fields: [
    {
      name: 'cellContent',
      title: 'Cell Content',
      type: 'blockContent',
    },
    {
      name: 'className',
      title: 'Enter classname if special',
      type: 'string',
    },
    {
      name: 'colSpan',
      title: 'Column Span',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'cellContent',
    },
  },
};

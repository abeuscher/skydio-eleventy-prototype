export default {
  name: 'tableRow',
  type: 'document',
  title: 'Table Row',
  fields: [
    {
      name: 'cells',
      title: 'Row Cells',
      type: 'array',
      of: [{ type: 'tableCell' }],
    },
  ],
  preview: {
    select: {
      firstCell: 'cells[0]',
    },
    prepare({ firstCell }) {
      return {
        title: firstCell ? firstCell.cellContent : 'Table Row',
      };
    },
  },
};

import { RiTableLine } from 'react-icons/ri';
import containerSize from '../snippets/containerSize';
import moduleStyle from '../snippets/moduleStyle';
import { verticalPadding } from '../snippets/moduleSpacing';

export default {
  name: 'flexibleContentGridModule',
  title: 'Flexible Content Grid',
  type: 'object',
  icon: RiTableLine,
  fieldsets: [
    {
      name: 'grid',
      title: 'Grid',
    },
    {
      name: 'appearance',
      title: 'Module Appearance',
    },
  ],
  fields: [
    {
      name: 'sectionHeader',
      title: 'Section Header',
      type: 'sectionHeader',
    },
    {
      name: 'sizeNote',
      type: 'note',
      fieldset: 'grid',
      options: {
        message:
          '<ul><li>The site layout uses a 12 column grid for screens that are wider than 768px</li><li>Use the <em>Container Size</em> setting in combination with the <em>Columns</em> items to create a layout</li><li>Each column can accept up to 3 "cards", so you can create unique stacked layouts</li></ul>',
      },
    },
    {
      ...containerSize,
      fieldset: 'grid',
    },
    {
      name: 'columns',
      title: 'Columns',
      type: 'array',
      of: [{ type: 'gridColumn' }],
      fieldset: 'grid',
    },
    {
      ...verticalPadding,
      description: 'Default is "More"',
      fieldset: 'appearance',
      initialValue: 'more',
    },
    {
      ...moduleStyle,
      title: 'Background Color',
      fieldset: 'appearance',
      initialValue: 'dark',
    },
    {
      title: 'Show Disclaimer?',
      name: 'showDisclaimer',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      heading: 'sectionHeader.heading',
      columns: 'columns',
      containerSize: 'containerSize',
    },
    prepare({ heading, columns, defaultContainerSize = 'large' }) {
      const printColumnCount = () => {
        if (!columns || !columns.length) {
          return 'No columns. Add a column to create a new layout.';
        }

        return `${columns.length} Column${columns.length === 1 ? '' : 's'}`;
      };

      return {
        title: `Flexible Content Grid ${heading ? `- ${heading}` : ''}`,
        subtitle: `${printColumnCount()} - ${defaultContainerSize} container`,
      };
    },
  },
};

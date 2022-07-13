import { RiLayoutColumnLine } from 'react-icons/ri';
import moduleStyle from '../snippets/moduleStyle';

export default {
  name: 'hero2UpModule',
  title: 'Hero - 2-Up',
  description: 'Full width hero with 1 or 2 content blocks',
  type: 'object',
  icon: RiLayoutColumnLine,
  fieldsets: [
    {
      name: 'appearance',
      title: 'Appearance Settings',
    },
  ],
  fields: [
    {
      name: 'note',
      type: 'note',
      options: {
        headline: 'Tip!',
        message:
          'If your content is appearing too large on wide monitors, be sure to preview the Appearance Settings > Contain Images toggle. This setting can improve how content displays on larger screens.',
      },
    },
    {
      name: 'blocks',
      title: 'Hero Content Areas',
      description:
        'This module is designed to be used with exactly 2 content areas.',
      type: 'array',
      of: [
        {
          type: 'hero2UpBlock',
        },
      ],
      validation: Rule => Rule.max(2),
    },
    {
      name: 'containImages',
      title: 'Contain Images',
      type: 'boolean',
      description:
        'Contain images to the standard page grid. Default is false.',
      fieldset: 'appearance',
    },
    {
      ...moduleStyle,
      description: 'Default is "Dark"',
      fieldset: 'appearance',
      options: {
        list: [
          { title: 'Light', value: 'light' },
          { title: 'Dark', value: 'dark' },
        ],
      },
      initialValue: 'dark',
    },
  ],
  preview: {
    select: {
      blocks: 'blocks',
    },
    prepare({ blocks }) {
      const title = blocks.map(block => block.heading).join(' | ');

      return {
        title: 'Hero - 2-Up',
        subtitle: title,
      };
    },
  },
};

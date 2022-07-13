import { FiAlertCircle } from 'react-icons/fi';
import moduleStyle from '../snippets/moduleStyle';

export default {
  name: 'contentGridModule',
  title: 'Content Grid (Deprecated)',
  type: 'object',
  fields: [
    {
      name: 'note',
      type: 'note',
      options: {
        icon: FiAlertCircle,
        message:
          'This module is deprecated. Please use Flexible Content Grid instead.',
        tone: 'critical',
      },
    },
    {
      name: 'sectionHeader',
      title: 'Section Header',
      type: 'sectionHeader',
    },
    {
      name: 'cards',
      title: 'Feature Cards',
      description: 'Add up to 8 feature cards',
      type: 'array',
      of: [{ type: 'featureCard' }],
      validation: Rule => Rule.min(1).max(8),
    },
    {
      ...moduleStyle,
      description: 'Default is "Dark"',
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
    },
    prepare({ heading }) {
      return {
        title: `Content Grid - DEPRECATED`,
        subtitle: heading,
      };
    },
  },
};

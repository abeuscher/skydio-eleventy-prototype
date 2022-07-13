import { BiCubeAlt } from 'react-icons/bi';
import moduleStyle from '../snippets/moduleStyle';

export default {
  name: 'sketchfabModule',
  title: 'Sketchfab',
  type: 'object',
  icon: BiCubeAlt,
  fields: [
    {
      name: 'sectionHeader',
      title: 'Section Header',
      type: 'sectionHeader',
    },
    {
      name: 'modelId',
      title: 'Model ID',
      type: 'string',
    },
    {
      ...moduleStyle,
      description: 'Default is "Dark"',
      initialValue: 'dark',
    },
  ],
  preview: {
    select: {
      title: 'sectionHeader.heading',
    },
    prepare: ({ title }) => {
      return {
        title: 'Sketchfab',
        subtitle: title,
      };
    },
  },
};

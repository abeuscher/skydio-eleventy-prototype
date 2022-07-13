import { BsReverseLayoutTextWindowReverse } from 'react-icons/bs';
import { verticalPadding } from '../snippets/moduleSpacing';

export default {
  name: 'tableModule',
  title: 'Table Module',
  type: 'object',
  icon: BsReverseLayoutTextWindowReverse,
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'rows',
      title: 'Rows',
      type: 'array',
      of: [{ type: 'tableRow' }],
    },
    {
      name: 'footnotes',
      title: 'Foot Notes',
      type: 'blockContent',
    },
    {
      ...verticalPadding,
      description: 'Default is "Less"',
      initialValue: 'less',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({ heading }) {
      return {
        title: heading,
        subtitle: `Table Module`,
      };
    },
  },
};

import { BsCardList } from 'react-icons/bs';
import moduleStyle from '../snippets/moduleStyle';
import { pluralize } from '../../helpers/stringUtils';

export default {
  name: 'specsModule',
  title: 'Specifications',
  type: 'object',
  icon: BsCardList,
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'specs',
      title: 'Specs',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'specification' }],
        },
      ],
    },
    {
      ...moduleStyle,
      description: 'Default is "Light"',
      initialValue: 'light',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      specs: 'specs',
    },
    prepare({ heading, specs }) {
      return {
        title: `Specifications - ${specs.length} ${pluralize(
          'specification',
          'specifications',
          specs,
        )}`,
        subtitle: heading,
      };
    },
  },
};

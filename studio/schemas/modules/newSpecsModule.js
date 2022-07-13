import { BsCardList } from 'react-icons/bs';
import { pluralize } from '../../helpers/stringUtils';

export default {
  name: 'newSpecsModule',
  title: 'New Specifications',
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
  ],
  preview: {
    select: {
      heading: 'heading',
      specs: 'specs',
    },
    prepare({ heading, specs }) {
      return {
        title: `New Specifications - ${specs.length} ${pluralize(
          'specification',
          'specifications',
          specs,
        )}`,
        subtitle: heading,
      };
    },
  },
};

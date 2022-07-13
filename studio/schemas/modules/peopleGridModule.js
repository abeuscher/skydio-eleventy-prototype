import { BsPeople } from 'react-icons/bs';
import { pluralize } from '../../helpers/stringUtils';

export default {
  name: 'peopleGridModule',
  title: 'People',
  type: 'object',
  icon: BsPeople,
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'people',
      title: 'People',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'person' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      people: 'people',
    },
    prepare({ heading, people }) {
      return {
        title: `People Grid - ${people.length} ${pluralize(
          'person',
          'people',
          people,
        )}`,
        subtitle: heading,
      };
    },
  },
};

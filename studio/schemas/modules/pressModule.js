import { BsNewspaper } from 'react-icons/bs';
import moduleStyle from '../snippets/moduleStyle';
import { pluralize } from '../../helpers/stringUtils';

export default {
  name: 'pressModule',
  title: 'Press',
  type: 'object',
  icon: BsNewspaper,
  fieldsets: [
    {
      name: 'appearance',
      title: 'Appearance Settings',
    },
  ],
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      description: 'Only shows when there is more than one article',
    },
    {
      name: 'articles',
      title: 'Articles',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'press' }],
        },
      ],
    },
    {
      ...moduleStyle,
      description: 'Default is "Light"',
      fieldset: 'appearance',
      initialValue: 'light',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      articles: 'articles',
    },
    prepare({ heading, articles }) {
      return {
        title: `Press - ${articles.length} ${pluralize(
          'article',
          'articles',
          articles,
        )}`,
        subtitle: heading,
      };
    },
  },
};

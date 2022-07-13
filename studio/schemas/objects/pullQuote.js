import { ImQuotesLeft } from 'react-icons/im';

export default {
  title: 'Pull Quote',
  name: 'pullQuote',
  type: 'object',
  icon: ImQuotesLeft,
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description:
        'Avoid using more than 30 characters as it can cause overflow on mobile devices.',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description:
        'Avoid using more than 30 characters as it can cause overflow on mobile devices.',
    },
  ],
  preview: {
    select: {
      name: 'name',
      quote: 'quote',
    },
    prepare: ({ name, quote }) => {
      return {
        title: name ? `Pull Quote - ${name}` : `${quote.substring(0, 30)}...`,
      };
    },
  },
};

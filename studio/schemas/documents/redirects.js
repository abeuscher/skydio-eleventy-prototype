import { RiExternalLinkFill } from 'react-icons/ri';

export default {
  name: 'redirects',
  title: 'Redirects',
  type: 'document',
  icon: RiExternalLinkFill,
  fields: [
    {
      name: 'redirects',
      title: 'Redirects',
      type: 'array',
      of: [{ type: 'redirect' }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Redirects',
      };
    },
  },
};

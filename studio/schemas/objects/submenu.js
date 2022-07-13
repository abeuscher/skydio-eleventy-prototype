import { FiList } from 'react-icons/fi';

export default {
  name: 'submenu',
  title: 'Submenu',
  type: 'object',
  icon: FiList,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'navGroup',
      title: 'Nav Group',
      type: 'array',
      of: [{ type: 'navGroup' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};

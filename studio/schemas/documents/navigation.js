import { FiList } from 'react-icons/fi';
import { isUniqueAcrossAllDocuments } from '../../lib/isUniqueAcrossAllDocuments';

export default {
  name: 'navigation',
  _id: 'navigation',
  title: 'Navigation',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  description: 'Site navigation menus',
  icon: FiList,
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      readOnly: true,
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: isUniqueAcrossAllDocuments,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'items',
      title: 'Nav Items',
      type: 'array',
      of: [{ type: 'submenu' }, { type: 'navLink' }],
    },
  ],
  preview: {
    select: {
      title: 'slug.current',
    },
  },
};

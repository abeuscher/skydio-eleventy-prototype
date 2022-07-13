import { FiAlertCircle } from 'react-icons/fi';
import { isUniqueAcrossAllDocuments } from '../../lib/isUniqueAcrossAllDocuments';

export default {
  name: 'categoryMain',
  title: 'Category Content',
  type: 'object',
  fields: [
    {
      name: 'note',
      type: 'note',
      options: {
        icon: FiAlertCircle,
        message:
          'Any category that is not assigned to any posts should be unpublished (blog only).',
        tone: 'caution',
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'content.main.title',
        maxLength: 96,
        isUnique: isUniqueAcrossAllDocuments,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockText',
    },
    {
      name: 'headerimage',
      title: 'Header Image',
      description: 'Recommended image size is 1280x720',
      type: 'figure',
    },
    {
      name: 'bgimage',
      title: 'BG Image',
      description: 'Recommended image size is 1280x720',
      type: 'figure',
    },
  ],
};

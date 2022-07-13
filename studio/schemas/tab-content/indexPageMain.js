import { FiAlertCircle } from 'react-icons/fi';
import { isUniqueAcrossAllDocuments } from '../../lib/isUniqueAcrossAllDocuments';

export default {
  title: 'Index Page Content',
  name: 'indexPageMain',
  type: 'object',
  fields: [
    {
      name: 'mainNote',
      type: 'note',
      options: {
        icon: FiAlertCircle,
        headline: 'Hold up!',
        message:
          "Don't forget to fill out the fields in the meta tab to help with SEO.",
        tone: 'caution',
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'note',
      type: 'note',
      options: {
        icon: FiAlertCircle,
        message:
          "The slug value should not be modified since it corresponds to each document's base path.",
        tone: 'critical',
      },
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
      description:
        'This may or may not be shown on the front end, depending on the template.',
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

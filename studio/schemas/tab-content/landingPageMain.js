import { FiAlertCircle } from 'react-icons/fi';
import { isUniqueAcrossAllDocuments } from '../../lib/isUniqueAcrossAllDocuments';

export default {
  title: 'Landing Page Content',
  name: 'landingPageMain',
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
      name: 'modules',
      title: 'Content Modules',
      type: 'landingPageModules',
      options: {
        canCopyTo: true,
      },
    },
  ],
};

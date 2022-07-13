import { HiDotsHorizontal } from 'react-icons/hi';
import moduleStyle from '../snippets/moduleStyle';
import { pluralize } from '../../helpers/stringUtils';

export default {
  name: 'logoBannerModule',
  title: 'Logo Banner',
  type: 'object',
  icon: HiDotsHorizontal,
  fields: [
    {
      name: 'sectionHeader',
      title: 'Section Header',
      type: 'sectionHeader',
    },
    {
      name: 'images',
      title: 'Logos',
      type: 'array',
      of: [{ type: 'figure' }],
    },
    {
      ...moduleStyle,
      description: 'Default is "Dark"',
      initialValue: 'dark',
    },
  ],
  preview: {
    select: {
      sectionHeader: 'sectionHeader',
      images: 'images',
    },
    prepare({ sectionHeader, images }) {
      return {
        title: `Logo Banner - ${images.length} ${pluralize(
          'logo',
          'logos',
          images,
        )}`,
        subtitle: sectionHeader?.heading,
      };
    },
  },
};

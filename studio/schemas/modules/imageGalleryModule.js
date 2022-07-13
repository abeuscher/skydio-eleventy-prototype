import { GrGallery } from 'react-icons/gr';
import moduleStyle from '../snippets/moduleStyle';
import { pluralize } from '../../helpers/stringUtils';

export default {
  title: 'Image Gallery',
  name: 'imageGalleryModule',
  type: 'object',
  icon: GrGallery,
  fields: [
    {
      type: 'sectionHeader',
      name: 'sectionHeader',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'figure' }],
      description:
        'The gallery looks best when 3, 7, 10, 14, or 17 images are used',
      validation: Rule => [
        Rule.required()
          .min(3)
          .max(18)
          .error(
            'At least 3 images are required, up to 18 images are supported.',
          ),
      ],
    },
    {
      ...moduleStyle,
      description: 'Default is "Light"',
      initialValue: 'light',
    },
  ],
  preview: {
    select: {
      sectionHeader: 'sectionHeader',
      images: 'images',
    },
    prepare({ sectionHeader, images }) {
      return {
        title: `Image Gallery - ${images.length} ${pluralize(
          'image',
          'images',
          images,
        )}`,
        subtitle: sectionHeader?.heading,
      };
    },
  },
};

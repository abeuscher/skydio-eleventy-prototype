import { MdOndemandVideo } from 'react-icons/md';
import mediaLayout from '../snippets/mediaLayout';
import moduleOverlap from '../snippets/moduleOverlap';
import moduleStyle from '../snippets/moduleStyle';
import { pluralize } from '../../helpers/stringUtils';

export default {
  title: 'Video Gallery',
  name: 'videoGalleryModule',
  type: 'object',
  icon: MdOndemandVideo,
  fields: [
    {
      type: 'sectionHeader',
      name: 'sectionHeader',
    },
    {
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [{ type: 'video' }],
      validation: Rule => [
        Rule.required()
          .min(1)
          .max(4)
          .error(
            'At least one video is required, up to 4 videos are supported.',
          ),
      ],
    },
    mediaLayout,
    moduleStyle,
    moduleOverlap,
  ],
  preview: {
    select: {
      sectionHeader: 'sectionHeader',
      videos: 'videos',
    },
    prepare({ sectionHeader, videos }) {
      return {
        title: `Video Gallery - ${videos.length} ${pluralize(
          'video',
          'videos',
          videos,
        )}`,
        subtitle: sectionHeader?.heading,
      };
    },
  },
};

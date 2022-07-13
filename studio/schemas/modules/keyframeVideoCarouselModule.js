import { MdOndemandVideo } from 'react-icons/md';
import mediaLayout from '../snippets/mediaLayout';
import moduleOverlap from '../snippets/moduleOverlap';
import moduleStyle from '../snippets/moduleStyle';

export default {
  title: 'Keyframe Video Carousel',
  name: 'keyframeVideoCarouselModule',
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
      of: [{ type: 'videoSlide' }],
    },
    {
      title: 'Bottom Video Header',
      name: 'bottomVideoHeader',
      type: 'string',
    },
    {
      title: 'Bottom Videos',
      name: 'bottomVideos',
      type: 'array',
      of: [{ type: 'videoSlide' }],
    },
    mediaLayout,
    moduleStyle,
    moduleOverlap,
    {
      title: 'Show Disclaimer?',
      name: 'showDisclaimer',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      sectionHeader: 'sectionHeader',
      videos: 'videos',
    },
    prepare({ sectionHeader }) {
      return {
        title: sectionHeader?.heading,
      };
    },
  },
};

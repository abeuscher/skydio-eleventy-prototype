import { ImFileVideo, ImImages } from 'react-icons/im';

import mediaLayout from '../snippets/mediaLayout';
import moduleOverlap from '../snippets/moduleOverlap';
import moduleStyle from '../snippets/moduleStyle';
import { verticalPadding } from '../snippets/moduleSpacing';

export default {
  title: 'Large Image/Video',
  name: 'largeMediaModule',
  type: 'object',
  icon: ImImages,
  fieldsets: [
    {
      name: 'appearance',
      title: 'Appearance Settings',
    },
  ],
  fields: [
    {
      type: 'sectionHeader',
      name: 'sectionHeader',
    },
    {
      type: 'optionalMedia',
      name: 'optionalMedia',
      title: 'Media Settings',
    },
    {
      type: 'comparisonCaptions',
      name: 'comparisonCaptions',
    },
    {
      ...verticalPadding,
      description: 'Default is "More"',
      fieldset: 'appearance',
      initialValue: 'more',
    },
    {
      ...moduleStyle,
      description: 'Default is "Dark"',
      fieldset: 'appearance',
      initialValue: 'dark',
    },
    {
      ...mediaLayout,
      fieldset: 'appearance',
    },
    {
      ...moduleOverlap,
      description: 'Default is "None"',
      fieldset: 'appearance',
      initialValue: 'none',
    },
    {
      title: 'Show Disclaimer?',
      name: 'showDisclaimer',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      sectionHeader: 'sectionHeader',
      optionalMedia: 'optionalMedia',
    },
    prepare({ sectionHeader, optionalMedia }) {
      const media =
        optionalMedia?.condition === 'image'
          ? optionalMedia.image?.figure
          : ImFileVideo;

      return {
        title: 'Large Media',
        subtitle: sectionHeader?.heading,
        media,
      };
    },
  },
};

import { CgScreenWide } from 'react-icons/cg';

export default {
  title: 'Hero - Product',
  name: 'heroProductModule',
  type: 'object',
  icon: CgScreenWide,
  fieldsets: [
    {
      name: 'content',
      title: 'Content Settings',
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'image',
      title: 'Image Settings',
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'specs',
      title: 'Specs',
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'video',
      title: 'Video Settings',
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      fieldset: 'content',
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      fieldset: 'content',
    },
    {
      name: 'button',
      title: 'Button',
      type: 'button',
      fieldset: 'content',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      description: 'Leave blank for no background image',
      type: 'image',
      fieldset: 'image',
    },
    {
      name: 'productImage',
      title: 'Product Hero Image',
      type: 'figure',
      fieldset: 'image',
    },
    {
      name: 'showSpecsVideo',
      title: 'Show Specs/Video Section',
      type: 'boolean',
    },
    {
      name: 'specsHeading',
      title: 'Specs Table Heading',
      type: 'string',
      fieldset: 'specs',
    },
    {
      name: 'specs',
      title: 'Specs List',
      type: 'array',
      fieldset: 'specs',
      of: [{ type: 'specificationValue' }],
      validation: Rule => Rule.max(6),
    },
    {
      name: 'videoThumb',
      title: 'Video Thumbnail',
      type: 'image',
      fieldset: 'video',
    },
    {
      name: 'videoLink',
      title: 'Video Link',
      type: 'link',
      fieldset: 'video',
      description:
        'Use this field to have the play button act as a link instead of playing a video. You can only use this field or the video option, not both.',
      validation: Rule =>
        Rule.custom((val, context) => {
          const internalLink = val?.internalLink;
          const externalLink = val?.externalLink;
          const hasLinkValue =
            externalLink?.link || internalLink?.path || internalLink?.link;

          if (hasLinkValue && context.parent?.video?.video) {
            return 'If using Video, Video Link should not be set.';
          }
          return true;
        }),
    },
    {
      name: 'video',
      title: 'Video',
      type: 'video',
      fieldset: 'video',
      validation: Rule =>
        Rule.custom((val, context) => {
          const internalLink = context.parent?.videoLink?.internalLink;
          const externalLink = context.parent?.videoLink?.externalLink;
          const hasLinkValue =
            externalLink?.link || internalLink?.path || internalLink?.link;

          if (val?.video && hasLinkValue) {
            return 'If using Video Link, Video should not be set.';
          }
          return true;
        }),
    },
    {
      title: 'Show Disclaimer?',
      name: 'showDisclaimer',
      type: 'boolean',
      fieldset: 'specs',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      backgroundImage: 'backgroundImage',
    },
    prepare({ heading, backgroundImage }) {
      const media = backgroundImage?.asset
        ? backgroundImage.asset
        : CgScreenWide;

      return {
        title: 'Hero - Product',
        subtitle: heading,
        media,
      };
    },
  },
};

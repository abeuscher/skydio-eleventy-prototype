import { MdChatBubbleOutline } from 'react-icons/md';
import moduleStyle from '../snippets/moduleStyle';
import { verticalPadding } from '../snippets/moduleSpacing';

export default {
  name: 'ctaModule',
  title: 'Call to Action',
  type: 'object',
  icon: MdChatBubbleOutline,
  fieldsets: [
    {
      name: 'content',
      title: 'Content Settings',
    },
    {
      name: 'image',
      title: 'Image Settings',
    },
    {
      name: 'appearance',
      title: 'Appearance Settings',
    },
  ],
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'text',
      rows: 4,
      fieldset: 'content',
    },
    {
      name: 'bodyText',
      title: 'Body Text',
      type: 'blockText',
      fieldset: 'content',
    },
    {
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [{ type: 'button' }],
      fieldset: 'content',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'figure',
      fieldset: 'image',
    },
    {
      name: 'inlineImageLink',
      title: 'Inline image link',
      type: 'link',
      fieldset: 'image',
    },
    {
      name: 'showInlinePlayIcon',
      title: 'Show play icon (on inline image links only)',
      type: 'boolean',
      fieldset: 'image',
    },
    {
      name: 'inlineImageWidth',
      title: 'Inline image width',
      type: 'string',
      description:
        'Adjusts grid spacing to account for different image aspect ratios: default is "Wide"',
      fieldset: 'image',
      options: {
        list: [
          { title: 'Wide', value: 'wide' },
          { title: 'Narrow', value: 'narrow' },
        ],
      },
    },
    {
      name: 'inlineImageTightenMobileSpacing',
      title: 'Tighten up inline image spacing on mobile',
      type: 'boolean',
      description:
        'This pulls the content, that sits below an inline image, up to overlap the image. Useful when the image has a drop shadow style that takes up vertical space.',
      fieldset: 'image',
    },
    {
      name: 'isBackgroundImage',
      title: 'Use background image instead of inline thumbnail',
      type: 'boolean',
      description: 'Defaults to inline thumbnail',
      fieldset: 'image',
    },
    {
      name: 'fadeBackgroundImage',
      title: 'Fade background image on small screens',
      type: 'boolean',
      description: 'Improves text legibility: default is no fade',
      fieldset: 'image',
    },
    {
      name: 'imageAlignment',
      title: 'Background Image Alignment',
      description: 'X axis anchor point: default is "Center"',
      type: 'string',
      fieldset: 'image',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'center',
    },
    {
      ...verticalPadding,
      description: 'Default is "More"',
      fieldset: 'appearance',
    },
    {
      name: 'extraTopPadding',
      title: 'Extra top padding',
      description: 'For finer control of individual module spacing',
      type: 'boolean',
      fieldset: 'appearance',
    },
    {
      name: 'extraBottomPadding',
      title: 'Extra bottom padding',
      description: 'For finer control of individual module spacing',
      type: 'boolean',
      fieldset: 'appearance',
    },
    {
      ...moduleStyle,
      description: 'Default is "Light"',
      fieldset: 'appearance',
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare: ({ title }) => {
      return {
        title: 'CTA Module',
        subtitle: title,
      };
    },
  },
};

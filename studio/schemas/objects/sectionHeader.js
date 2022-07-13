import { horizontalAlignment, verticalAlignment } from '../snippets/alignment';

import { verticalPadding } from '../snippets/moduleSpacing';

export default {
  title: 'Section Header',
  name: 'sectionHeader',
  type: 'object',
  fieldsets: [
    {
      name: 'content',
      title: 'Content Settings',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'button',
      title: 'Button Settings',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'image',
      title: 'Image Settings',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      name: 'label',
      title: 'Section Label',
      description: 'Leave blank to hide',
      type: 'string',
      fieldset: 'content',
    },
    {
      name: 'heading',
      title: 'Section Heading',
      description:
        'Press Shift + Enter to add a line break. Leave blank to hide',
      type: 'text',
      rows: 3,
      fieldset: 'content',
    },
    {
      name: 'headingHOne',
      title: 'Wrap Heading in H1?',
      description:
        'Use this if this is the top section on a page and the headline willbe the page headline.',
      type: 'boolean',
      initialValue: false,
      fieldset: 'content',
    },
    {
      name: 'subheading',
      title: 'Section Subheading',
      description:
        'Due to front end styling, bold will not affect this section. Leave blank to hide',
      type: 'blockText',
      rows: 3,
      fieldset: 'content',
    },
    {
      name: 'body',
      title: 'Body Text',
      description: 'Leave blank to hide',
      type: 'blockText',
      rows: 3,
      fieldset: 'content',
    },
    {
      ...horizontalAlignment,
      description: 'Which side the content should appear on and be aligned to',
      fieldset: 'content',
    },
    {
      ...verticalAlignment,
      description: 'Which vertical position the content should be anchored to',
      fieldset: 'content',
    },
    {
      ...verticalPadding,
      description: 'Default is "More"',
      fieldset: 'content',
    },
    {
      name: 'displayButton',
      title: 'Display CTA Button',
      type: 'boolean',
      fieldset: 'button',
    },
    {
      name: 'ctaButtons',
      title: 'CTA Buttons',
      fieldset: 'button',
      type: 'array',
      of: [{ type: 'buttonSimple' }],
      options: {
        collapsible: false,
      },
    },
    {
      name: 'displayImage',
      title: 'Display Image/Video',
      type: 'boolean',
      fieldset: 'image',
    },
    {
      name: 'inlineImage',
      title: 'Inline Image/Video',
      description: 'Turn on to have image placed alongside content',
      type: 'boolean',
      fieldset: 'image',
    },
    {
      name: 'mediaType',
      title: 'Media Type',
      type: 'string',
      fieldset: 'image',
      options: {
        list: [
          {
            title: 'Image',
            value: 'image',
          },
          {
            title: 'Video',
            value: 'video',
          },
        ],
        layout: 'radio',
      },
      initialValue: 'image',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'figure',
      fieldset: 'image',
      hidden: ({ parent }) => parent.mediaType !== 'image',
    },
    {
      name: 'video',
      title: 'Video',
      type: 'video',
      fieldset: 'image',
      hidden: ({ parent }) =>
        !parent?.mediaType || parent.mediaType !== 'video',
    },
  ],
};

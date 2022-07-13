import { MdChatBubbleOutline } from 'react-icons/md';
import moduleStyle from '../snippets/moduleStyle';

export default {
  name: 'ctaLargeModule',
  title: 'Call to Action - Large',
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
      title: 'Heading',
      name: 'heading',
      type: 'string',
      fieldset: 'content',
    },
    {
      title: 'Text',
      name: 'text',
      type: 'text',
      rows: 6,
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
      title: 'Image',
      name: 'image',
      type: 'figure',
      fieldset: 'image',
    },
    {
      name: 'inlineImage',
      title: 'Inline Image',
      description:
        'Turn on to keep text left aligned have image placed right of content',
      type: 'boolean',
      fieldset: 'image',
    },
    {
      title: 'Show Disclaimer?',
      name: 'showDisclaimer',
      type: 'boolean',
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
        title: 'CTA Module - Large',
        subtitle: title,
      };
    },
  },
};

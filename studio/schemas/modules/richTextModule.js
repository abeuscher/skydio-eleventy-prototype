import { BsFileRichtext } from 'react-icons/bs';
import containerSize from '../snippets/containerSize';
import { horizontalAlignment } from '../snippets/alignment';
import moduleStyle from '../snippets/moduleStyle';
import { verticalPadding } from '../snippets/moduleSpacing';

export default {
  name: 'richTextModule',
  title: 'Rich Text',
  type: 'object',
  icon: BsFileRichtext,
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'blockContent',
    },
    {
      ...verticalPadding,
      description: 'Default is "More"',
      initialValue: 'more',
    },
    {
      ...moduleStyle,
      description: 'Default is "Light"',
      initialValue: 'light',
    },
    horizontalAlignment,
    containerSize,
    {
      title: 'Show Disclaimer?',
      name: 'showDisclaimer',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      blocks: 'text',
    },
    prepare(value) {
      const blockContent = (value.blocks || []).find(
        block => block._type === 'block',
      );
      return {
        title: 'Rich Text',
        subtitle:
          blockContent &&
          blockContent.children
            .filter(child => child._type === 'span')
            .map(span => span.text)
            .join(''),
      };
    },
  },
};

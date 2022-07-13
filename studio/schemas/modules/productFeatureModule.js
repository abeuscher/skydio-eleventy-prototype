import { RiTableLine } from 'react-icons/ri';
import moduleSliderHeight from '../snippets/moduleSliderHeight';
import moduleStyle from '../snippets/moduleStyle';
import { verticalPadding } from '../snippets/moduleSpacing';

export default {
  name: 'productFeatureModule',
  title: 'Product Feature',
  type: 'object',
  icon: RiTableLine,
  fieldsets: [
    {
      name: 'appearance',
      title: 'Appearance Settings',
    },
  ],
  fields: [
    {
      name: 'note',
      type: 'note',
      options: {
        message:
          'This module is intended to be used to merchandise products - if you need a grid solution for displaying other content, consider using the Flexible Content Grid module.',
        tone: 'caution',
      },
    },
    {
      name: 'label',
      title: 'Section Label',
      description: 'Leave blank to hide',
      type: 'string',
    },
    {
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
    },
    {
      name: 'featureItems',
      title: 'Product Items',
      type: 'array',
      of: [{ type: 'productFeatureItem' }],
      validation: Rule => [
        Rule.required()
          .min(1)
          .max(4)
          .error('Required field with at least 1 and at most 4 items.'),
      ],
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
      ...moduleSliderHeight,
      description: 'Default is "Equal"',
      fieldset: 'appearance',
      initialValue: 'equal',
    },
    {
      name: 'moduleLayoutStyle',
      title: 'Module Layout Style',
      type: 'string',
      description:
        'Alternate layout will decrease the image size and increase the size of the body text.',
      fieldset: 'appearance',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Alternate', value: 'alternate' },
        ],
      },
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({ heading }) {
      return {
        title: `Product Feature`,
        subtitle: heading,
      };
    },
  },
};

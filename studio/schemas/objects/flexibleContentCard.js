import { horizontalAlignment, verticalAlignment } from '../snippets/alignment';

import { BiCard } from 'react-icons/bi';
import moduleStyle from '../snippets/moduleStyle';

export default {
  title: 'Content Card',
  name: 'flexibleContentCard',
  type: 'object',
  fieldsets: [
    {
      title: 'Content',
      name: 'content',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      title: 'Image',
      name: 'image',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      title: 'Style',
      name: 'style',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      fieldset: 'content',
    },
    {
      name: 'body',
      title: 'Body Text',
      type: 'blockContent',
      fieldset: 'content',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'figure',
      options: {
        collapsible: false,
      },
      fieldset: 'image',
    },
    {
      name: 'imageSize',
      title: 'Image Size',
      type: 'string',
      options: {
        list: [
          { title: '16:9', value: '16/9' },
          { title: '4:3', value: '4/3' },
          { title: 'Square', value: '1' },
          { title: 'Stretch', value: 'stretch' },
        ],
      },
      initialValue: '16/9',
      fieldset: 'image',
    },
    {
      name: 'imagePlacement',
      title: 'Image Placement',
      description:
        'When using "background", card must have content in order for image to show.',
      type: 'string',
      options: {
        list: [
          { title: 'Below Content', value: 'below' },
          { title: 'Above Content', value: 'above' },
          { title: 'Background', value: 'background' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'below',
      fieldset: 'image',
    },
    {
      name: 'imageOverlayColor',
      title: 'Image Overlay Color',
      type: 'string',
      options: {
        list: [
          { title: 'Blue', value: 'blue' },
          { title: 'Black', value: 'black' },
          { title: 'White', value: 'white' },
        ],
      },
      fieldset: 'image',
    },
    {
      name: 'imageOverlayOpacity',
      title: 'Image Overlay Opacity',
      description: 'Opacity ranges from 0-100.',
      type: 'number',
      validation: Rule => Rule.min(0).max(100).error('Must be between 0-100.'),
      fieldset: 'image',
    },
    {
      title: 'Card Background Color',
      name: 'cardColor',
      type: 'string',
      fieldset: 'style',
      options: {
        list: [
          { title: 'Transparent', value: 'transparent' },
          ...moduleStyle.options.list,
        ],
      },
      initialValue: 'medium-dark',
    },
    {
      name: 'padding',
      title: 'Card Padding',
      type: 'string',
      fieldset: 'style',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Small', value: 'small' },
          { title: 'Medium', value: 'medium' },
          { title: 'Large', value: 'large' },
        ],
      },
      initialValue: 'medium',
    },
    {
      ...horizontalAlignment,
      fieldset: 'style',
      initialValue: 'left',
    },
    {
      ...verticalAlignment,
      fieldset: 'style',
      initialValue: 'top',
    },
  ],
  preview: {
    select: {
      image: 'image',
      title: 'title',
    },
    prepare({ image, title }) {
      return {
        title: title ? title : 'Card',
        media: image ? image : BiCard,
      };
    },
  },
};

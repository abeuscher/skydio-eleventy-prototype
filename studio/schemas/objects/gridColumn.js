import { Avatar } from '@sanity/ui';
import { FiAlignLeft } from 'react-icons/fi';
import React from 'react';

export default {
  title: 'Column',
  name: 'gridColumn',
  type: 'object',
  icon: FiAlignLeft,
  fieldsets: [
    {
      title: '',
      name: 'sizes',
      options: { columns: 2 },
    },
    {
      title: '',
      name: 'alignment',
      options: { columns: 2 },
    },
  ],
  fields: [
    {
      name: 'sizeNote',
      type: 'note',
      options: {
        message: 'All columns will be full width on mobile.',
      },
    },
    {
      title: 'Tablet Width (Columns)',
      name: 'tabletSizing',
      description: 'This width is based on a 12 column grid.',
      type: 'number',
      options: {
        list: [
          { title: '1', value: 1 },
          { title: '2', value: 2 },
          { title: '3', value: 3 },
          { title: '4', value: 4 },
          { title: '5', value: 5 },
          { title: '6', value: 6 },
          { title: '7', value: 7 },
          { title: '8', value: 8 },
          { title: '9', value: 9 },
          { title: '10', value: 10 },
          { title: '11', value: 11 },
          { title: '12', value: 12 },
        ],
      },
      validation: Rule =>
        Rule.custom((val, context) => {
          if (context.parent.cards && !val) {
            return 'Column must have a set width';
          }
          return true;
        }),
      fieldset: 'sizes',
    },
    {
      title: 'Desktop Width (Columns)',
      name: 'desktopSizing',
      description:
        'This width is based 12 column grid. Leave blank to inherit tablet width',
      type: 'number',
      options: {
        list: [
          { title: '1', value: 1 },
          { title: '2', value: 2 },
          { title: '3', value: 3 },
          { title: '4', value: 4 },
          { title: '5', value: 5 },
          { title: '6', value: 6 },
          { title: '7', value: 7 },
          { title: '8', value: 8 },
          { title: '9', value: 9 },
          { title: '10', value: 10 },
          { title: '11', value: 11 },
          { title: '12', value: 12 },
        ],
      },
      fieldset: 'sizes',
    },
    {
      title: 'Tablet Order',
      name: 'tabletOrder',
      description:
        'Use this field to reorder columns on tablet. If setting this value on one column in your grid, all other columns will need to have a set value in numerical order. Values can range from 1 - 13.',
      type: 'number',
      validation: Rule => Rule.min(1).max(13),
      fieldset: 'sizes',
    },
    {
      title: 'Desktop Order',
      name: 'desktopOrder',
      description:
        'Use this field to reorder columns on desktop. If setting this value on one column in your grid, all other columns will need to have a set value in numerical order. Values can range from 1 - 13.',
      type: 'number',
      validation: Rule => Rule.min(1).max(13),
      fieldset: 'sizes',
    },
    {
      title: 'Alignment',
      name: 'alignment',
      type: 'string',
      description: 'Control the Y-axis positioning.',
      options: {
        list: [
          { title: 'Top', value: 'start' },
          { title: 'Middle', value: 'center' },
          { title: 'Bottom', value: 'end' },
          { title: 'Stretch', value: 'stretch' },
        ],
      },
      initialValue: 'start',
      fieldset: 'alignment',
    },
    {
      title: 'Content Cards',
      name: 'cards',
      description:
        "Add up to 3 vertically stacked cards within a column. Don't add any cards to use column as a spacer",
      type: 'array',
      of: [{ type: 'flexibleContentCard' }],
      validation: Rule => Rule.max(3),
    },
  ],
  preview: {
    select: {
      desktopSizing: 'desktopSizing',
      tabletSizing: 'tabletSizing',
      card: 'cards.0',
      cards: 'cards',
    },
    prepare({ desktopSizing, tabletSizing, cards }) {
      const width = desktopSizing ? desktopSizing : tabletSizing;

      cards = Object.entries(cards || {})
        .map(([key, value]) => value)
        .filter(value => !!value);

      const title = !cards.length
        ? 'Spacer'
        : cards.map(card => card.title).join(' | ');

      const subtitle = cards
        .filter(card => card?.image?.alt)
        .map(card => `Image: ${card.image.alt}`)
        .join(' | ');

      return {
        title,
        subtitle,
        media: <Avatar initials={width ? width : '-'} size={1} />,
      };
    },
  },
};

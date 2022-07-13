import { RiQuestionLine } from 'react-icons/ri';

export default {
  id: 'meta',
  title: 'Meta Information',
  name: 'metaCard',
  type: 'object',
  fields: [
    {
      name: 'metaNote',
      type: 'note',
      options: {
        icon: RiQuestionLine,
        message:
          'Any field left blank will default to the site-wide meta values.',
      },
    },
    {
      name: 'title',
      title: 'Meta Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Meta Description',
      type: 'string',
    },
    {
      name: 'keywords',
      title: 'Meta Keywords',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'socialImage',
      title: 'Social Image',
      type: 'image',
      description: 'Image should be at least 1200 x 650',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'metaNoteTwo',
      type: 'note',
      options: {
        icon: RiQuestionLine,
        message:
          'Platform specific fields below. Their value will override the main value on the relevant platforms.',
      },
    },
    {
      name: 'ogTitle',
      title: 'OG Title',
      type: 'string',
      description: 'This will show up as the title for OpenGraph Shares only',
    },

    {
      name: 'ogDescription',
      title: 'OG Description',
      type: 'string',
      description:
        'This will show up as the description for OpenGraph Shares only',
    },
    {
      name: 'twitterTitle',
      title: 'Twitter Title',
      type: 'string',
      description: 'This will show up as the title for Twitter Shares only',
    },
    {
      name: 'twitterDescription',
      title: 'Twitter Description',
      type: 'string',
      description:
        'This will show up as the description for Twitter Shares only',
    },
    {
      name: 'twitterThumb',
      title: 'Twitter Thumb',
      type: 'image',
      description: 'Image should be at least 1200 x 600',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'twitterCardType',
      title: 'Twitter Card Type',
      type: 'string',
      description: 'Select the type of Twitter card you would like to display.',
      initialValue: 'summary_large_image',
      options: {
        list: [
          { title: 'Summary with Large Image', value: 'summary_large_image' },
          { title: 'Summary Card', value: 'summary' },
          { title: 'Player Card', value: 'player' },
        ],
      },
    },
    {
      name: 'robots',
      title: 'Robots',
      type: 'string',
      description:
        'If filled out, this will describe the appropriate behavior for Search engine robots',
    },
  ],
};

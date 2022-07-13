import { isUniqueAcrossAllDocuments } from '../../lib/isUniqueAcrossAllDocuments';

export default {
  name: 'episodeMain',
  title: 'Episode Content',
  type: 'object',
  fieldsets: [
    {
      name: 'image',
      title: 'Main Image',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      name: 'episodeNumber',
      title: 'Episode Number',
      type: 'number',
      description:
        'Used for sorting and displaying the episode number. Required',
      validation: Rule => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Titles should be catchy, descriptive, and not too long',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'Some frontends will require a slug to be set to be able to show the episode',
      options: {
        source: 'content.main.title',
        maxLength: 96,
        isUnique: isUniqueAcrossAllDocuments,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule =>
        Rule.max(new Date().toISOString()).error(
          'This cannot be a future date',
        ),
      description:
        'This cannot be used to schedule a post for future publishing',
    },
    {
      name: 'mainImage',
      title: 'Image',
      type: 'figure',
      description:
        'Image will display best with a 16:9 aspect ratio. Ex: 1280x720',
      fieldset: 'image',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'blockText',
      validation: Rule => Rule.required().max(200),
      description: 'Maximum 200 characters',
    },
    {
      name: 'series',
      title: 'Series',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'series',
          },
        },
      ],
      validation: Rule => Rule.required(),
    },
    {
      title: 'Episode Video',
      name: 'video',
      type: 'youtube',
    },
    {
      title: 'Modules',
      name: 'modules',
      type: 'array',
      of: [
        {
          type: 'productFeatureModule',
        },
        {
          type: 'blockContentModule',
        },
      ],
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'person',
          },
        },
      ],
      validation: Rule => Rule.required(),
    },
  ],
};

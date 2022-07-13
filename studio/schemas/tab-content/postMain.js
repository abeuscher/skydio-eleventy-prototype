import { isUniqueAcrossAllDocuments } from '../../lib/isUniqueAcrossAllDocuments';

export default {
  name: 'postMain',
  title: 'Post Content',
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
        'Some frontends will require a slug to be set to be able to show the post',
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
      description:
        'Note: this cannot be used to schedule a post for future publishing',
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
      description: 'Maximum 200 characters',
      validation: Rule => Rule.required().max(200),
    },
    {
      name: 'modules',
      title: 'Post Modules',
      type: 'postModules',
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
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'category',
          },
        },
      ],
      validation: Rule => Rule.required(),
    },
  ],
};

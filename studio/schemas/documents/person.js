export default {
  name: 'person',
  type: 'document',
  title: 'Person',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description:
        'Some frontends will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'linkedin',
      title: 'LinkedIn Link',
      type: 'externalLink',
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'blockText',
    },
    {
      name: 'image',
      title: 'Profile Image',
      description: 'Recommended image size is 512x512',
      type: 'figure',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'image',
    },
  },
};

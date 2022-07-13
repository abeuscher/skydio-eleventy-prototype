export default {
  name: 'resourceTileMain',
  title: 'Resource Tile Content',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule =>
        Rule.required().error("A 'Published at' date and time is required"),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockText',
    },
    {
      name: 'thumbimage',
      title: 'Thumb Image',
      description: 'Recommended image size is 1280x720',
      type: 'figure',
      validation: Rule =>
        Rule.required().error('A thumbnail image is required'),
    },
    {
      name: 'link',
      title: 'Link to Asset',
      description: 'Please provide a link for this to point to',
      type: 'link',
      validation: Rule => [
        Rule.required().error('A link to an asset is required'),
        Rule.custom(field => {
          return !field.internalLink && !field.externalLink
            ? 'A link to an asset is required'
            : true;
        }),
      ],
    },
    {
      name: 'resourceType',
      title: 'Resource Type',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'resourceType',
          },
        },
      ],
      validation: Rule => Rule.required().error('A resource type is required'),
    },
    {
      name: 'sticky',
      title: 'Sticky',
      description:
        'This affects sort order; posts are sorted by sticky THEN by date',
      type: 'boolean',
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
    },
  ],
};

export default {
  title: 'Figure',
  name: 'figure',
  type: 'image',
  fields: [
    {
      name: 'caption',
      title: 'Image Caption',
      type: 'string',
      description:
        'Note: captions may not always be visible, depending on where an image is displayed.',
      options: {
        isHighlighted: false,
      },
    },
    {
      name: 'link',
      title: 'Image Link',
      type: 'link',
      description:
        'Linking an image is optional and will not be utilized in every module',
      options: {
        isHighlighted: false,
      },
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      validation: Rule =>
        Rule.custom((alt, context) => {
          // Error if there is an asset but no alt
          if (context?.parent?.asset && !alt) {
            return 'You have to fill out the alternative text.';
          }

          return true;
        }),
      description: 'Important for SEO and accessibility.',
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'asset',
    },
  },
};

import { BsCardImage, BsFilm } from 'react-icons/bs';

export default {
  title: 'Carousel Card',
  name: 'carouselCard',
  type: 'object',
  fields: [
    {
      name: 'caption',
      title: 'Caption Text',
      type: 'blockText',
    },
    {
      name: 'media',
      title: 'Media',
      type: 'optionalMedia',
      options: {
        collapsible: false,
      },
    },
  ],
  preview: {
    select: {
      media: 'media',
    },
    prepare: ({ media }) => {
      return {
        title: `Card - caption & ${media.condition}`,
        media: media.condition === 'image' ? BsCardImage : BsFilm,
      };
    },
  },
};

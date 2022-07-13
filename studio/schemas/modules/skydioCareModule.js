import { AiFillHeart } from 'react-icons/ai';

export default {
  name: 'skydioCareModule',
  title: 'Skydio Care Module',
  type: 'object',
  icon: AiFillHeart,
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'text',
      rows: 2,
    },
    {
      name: 'sectionBody',
      title: 'Section Body',
      type: 'blockContent',
    },
    {
      title: 'Buttons',
      name: 'buttons',
      type: 'array',
      of: [{ type: 'button' }],
    },
    {
      name: 'bgImage',
      title: 'Background Image',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'sectionTitle',
    },
    prepare: ({ title }) => {
      return {
        title: 'Skydio Care',
        subtitle: title,
      };
    },
  },
};

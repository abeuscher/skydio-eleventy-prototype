import MediaLanguageDisplay from '../../components/preview/MediaLanguageDisplay';
import React from 'react';
import { RiPagesLine } from 'react-icons/ri';

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: RiPagesLine,
  fields: [
    {
      name: 'content',
      type: 'pageContent',
    },
  ],
  orderings: [
    {
      name: 'titleAsc',
      title: 'Title',
      by: [
        {
          field: 'content.main.title',
          direction: 'asc',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'content.main.title',
      lang: 'i18n_lang',
    },
    prepare({ title, lang }) {
      return {
        title,
        media: <MediaLanguageDisplay language={lang} Media={RiPagesLine} />,
      };
    },
  },
};

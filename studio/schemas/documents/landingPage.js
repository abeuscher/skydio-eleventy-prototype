import MediaLanguageDisplay from '../../components/preview/MediaLanguageDisplay';
import React from 'react';
import { RiPagesFill } from 'react-icons/ri';

export default {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  icon: RiPagesFill,
  liveEdit: false,
  fields: [
    {
      name: 'content',
      type: 'landingPageContent',
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
        media: <MediaLanguageDisplay language={lang} Media={RiPagesFill} />,
      };
    },
  },
};

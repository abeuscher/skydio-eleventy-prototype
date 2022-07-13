import MediaLanguageDisplay from '../../components/preview/MediaLanguageDisplay';
import React from 'react';
import { RiFileListFill } from 'react-icons/ri';

export default {
  name: 'series',
  type: 'document',
  title: 'Series',
  fields: [
    {
      name: 'content',
      type: 'categoryContent',
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
        media: <MediaLanguageDisplay language={lang} Media={RiFileListFill} />,
      };
    },
  },
};

import MediaLanguageDisplay from '../../components/preview/MediaLanguageDisplay';
import React from 'react';
import { RiFileListFill } from 'react-icons/ri';

export default {
  name: 'modelCollection',
  type: 'document',
  title: 'Collection',
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

import { RiGlobalLine } from 'react-icons/ri';

export default {
  name: 'siteGlobal',
  title: 'Global Meta & Social',
  type: 'document',
  _id: 'siteGlobal',
  description: 'Handles general global settings',
  icon: RiGlobalLine,
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'content',
      type: 'globalContent',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Global Meta & Social',
      };
    },
  },
};

import { FaPhotoVideo } from 'react-icons/fa';

export default {
  title: 'Multiple Video Module',
  name: 'multiVideoModule',
  type: 'object',
  icon: FaPhotoVideo,
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'string',
    },
    {
      title: 'Sub Header',
      name: 'subheader',
      type: 'string',
    },
    {
      title: 'Video Groups',
      name: 'videoGroups',
      type: 'array',
      of: [{ type: 'videoGroup' }],
    },
  ],
};

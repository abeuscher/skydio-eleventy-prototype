import { FaPhotoVideo } from 'react-icons/fa';

export default {
  title: 'Obstacle Avoidance Module',
  name: 'obstacleAvoidanceModule',
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
      title: 'BG Image',
      name: 'bgImage',
      type: 'image',
    },
    {
      title: 'Overlay Image',
      name: 'overlayImage',
      type: 'image',
    },
    {
      title: 'Mobile Image',
      name: 'mobileImage',
      type: 'image',
    },
    {
      title: 'Bottom Videos',
      name: 'bottomVideos',
      type: 'array',
      of: [{ type: 'videoSlide' }],
    },
  ],
};

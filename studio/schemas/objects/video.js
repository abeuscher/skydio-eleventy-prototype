import { ImFileVideo } from 'react-icons/im';

export default {
  title: 'Video',
  name: 'video',
  type: 'object',
  fieldsets: [
    {
      name: 'settings',
      title: 'Video Settings',
      options: { collapsible: true, collapsed: false },
      description:
        'These settings may be overridden depending on which module the video is being used in.',
    },
  ],
  icon: ImFileVideo,
  fields: [
    {
      title: 'Video File',
      name: 'video',
      type: 'mux.video',
    },
    {
      name: 'autoload',
      title: 'Autoload Video',
      type: 'boolean',
      fieldset: 'settings',
    },
    {
      name: 'autoplay',
      title: 'Autoplay Video',
      type: 'boolean',
      fieldset: 'settings',
    },
    {
      name: 'muted',
      title: 'Mute Video',
      description: 'All videos are muted by default',
      type: 'boolean',
      fieldset: 'settings',
    },
    {
      name: 'loop',
      title: 'Loop video',
      type: 'boolean',
      fieldset: 'settings',
    },
    {
      name: 'controls',
      title: 'Show Controls',
      description:
        'Not for use in Video Gallery or Caption Carousel modules due to the existing UI of those modules.',
      type: 'boolean',
      fieldset: 'settings',
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Video`,
        media: ImFileVideo,
      };
    },
  },
};

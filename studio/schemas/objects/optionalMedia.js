import { FaPhotoVideo } from 'react-icons/fa';

export default {
  title: 'Image/Video',
  name: 'optionalMedia',
  type: 'object',
  options: {
    collapsed: false,
    collapsible: false,
  },
  icon: FaPhotoVideo,
  validation: Rule =>
    Rule.custom(field => {
      if (!field) {
        return true;
      }

      const { video, image } = field;

      // Error if the field has more than one of the possible values. image can exists even without being set, check the the asset property.
      return image?.asset && video
        ? 'Set a video or image, but not both.'
        : true;
    }),
  fields: [
    {
      name: 'condition',
      title: 'Media Type',
      type: 'string',
      options: {
        list: [
          {
            title: 'Image',
            value: 'image',
          },
          {
            title: 'Video',
            value: 'video',
          },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'figure',
      hidden: ({ parent }) =>
        !parent?.condition || parent.condition !== 'image',
    },
    {
      name: 'video',
      title: 'Video',
      type: 'video',
      hidden: ({ parent }) =>
        !parent?.condition || parent.condition !== 'video',
    },
  ],
};

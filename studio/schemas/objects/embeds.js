import InstagramPreview from '../../components/preview/Instagram';
import { MdPhotoCamera } from 'react-icons/md';

export const instagram = {
  type: 'object',
  name: 'instagram',
  title: 'Instagram Post',
  icon: MdPhotoCamera,
  fields: [
    {
      type: 'url',
      name: 'url',
      description: 'The URL to the post as seen in a desktop browser',
    },
  ],
  preview: {
    select: { url: 'url' },
    component: InstagramPreview,
  },
};

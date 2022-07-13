import { AiOutlineWarning } from 'react-icons/ai';
import { isUniqueAcrossAllDocuments } from '../../lib/isUniqueAcrossAllDocuments';

export default {
  name: 'modelMain',
  title: 'Model Content',
  type: 'object',
  fieldsets: [
    {
      name: 'image',
      title: 'Main Image',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'specs',
      title: 'Specs',
      options: { columns: 2 },
    },
  ],
  fields: [
    {
      name: 'orderNote',
      type: 'note',
      options: {
        icon: AiOutlineWarning,
        message:
          'Set the model number using the "Order Documents" tab in the toolbar above.',
        tone: 'caution',
      },
    },
    {
      name: 'modelId',
      title: 'Model ID',
      type: 'string',
      description: 'Sketchfab Model UID',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Titles should be catchy, descriptive, and not too long',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'content.main.title',
        maxLength: 96,
        isUnique: isUniqueAcrossAllDocuments,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Image',
      type: 'figure',
      description:
        'Image will display best with a 16:9 aspect ratio. Ex: 1280x720',
      fieldset: 'image',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'blockText',
      validation: Rule => Rule.max(200),
      description:
        'This will be shown on the listings page. Maximum 200 characters',
    },
    {
      name: 'description',
      title: 'Full Description',
      type: 'blockText',
      description: 'This will be shown on the model details page.',
    },
    {
      name: 'modelCollection',
      title: 'Collection',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'modelCollection',
          },
        },
      ],
      validation: Rule => Rule.required(),
    },
    {
      name: 'captureType',
      title: 'Capture Type',
      type: 'string',
      fieldset: 'specs',
    },
    {
      name: 'photos',
      title: 'Photos',
      type: 'number',
      fieldset: 'specs',
    },
    {
      name: 'standoffDistance',
      title: 'Standoff Distance',
      type: 'number',
      fieldset: 'specs',
    },
    {
      name: 'resolution',
      title: 'Resolution (GSD)',
      type: 'number',
      fieldset: 'specs',
    },
    {
      name: 'flightTime',
      title: 'Flight Time',
      type: 'number',
      fieldset: 'specs',
    },
  ],
};

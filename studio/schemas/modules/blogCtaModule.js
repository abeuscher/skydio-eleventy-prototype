import { MdChat } from 'react-icons/md';

export default {
  name: 'blogCtaModule',
  title: 'Blog CTA Module',
  type: 'object',
  icon: MdChat,
  fields: [
    {
      name: 'sectionCopy',
      title: 'Section Copy',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.max(60),
      description: '60 Character Limit',
      initialValue: 'Schedule a demo with our sales team today.',
    },
    {
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [{ type: 'button' }],
      initialValue: [
        {
          _type: 'button',
          text: 'Schedule a Demo',
          link: {
            _type: 'link',
            condition: 'externalLink',
            externalLink: {
              _type: 'externalLink',
              link: 'https://pages.skydio.com/Contact.html',
              blank: true,
            },
          },
        },
      ],
    },
    {
      name: 'bgColor',
      title: 'Module Background Color',
      type: 'string',
      description:
        'Enter a hex value including "#" to override default bg color',
    },
    {
      name: 'className',
      title: 'Optional CSS Class Name',
      type: 'string',
      description:
        'Enter a css class if there is one you would like to apply to this container.',
    },
    {
      name: 'buttonPosition',
      title: 'Button Position',
      type: 'string',
      description: 'Defaults to Right',
      options: {
        list: [
          { title: 'Right', value: 'right' },
          { title: 'Left', value: 'left' },
        ],
      },
      initialValue: 'right',
    },
  ],
  preview: {
    select: {
      sectionCopy: 'sectionCopy',
    },
    prepare({ sectionCopy }) {
      return {
        title: 'Blog CTA',
        subtitle: sectionCopy,
      };
    },
  },
};

import { RiLayoutRight2Fill } from 'react-icons/ri';
import moduleStyle from '../snippets/moduleStyle';

export default {
  name: 'captionCarouselModule',
  title: 'Caption Carousel',
  type: 'object',
  icon: RiLayoutRight2Fill,
  fieldsets: [
    {
      name: 'header',
      title: 'Header Content',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'cards',
      title: 'Cards Content',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: 'appearance',
      title: 'Module Appearance',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      name: 'sectionHeader',
      type: 'sectionHeader',
      fieldset: 'header',
    },
    {
      name: 'carouselCards',
      title: 'Carousel Card',
      type: 'array',
      fieldset: 'cards',
      description: 'Add up to 4 image/video slides with captions.',
      of: [{ type: 'carouselCard' }],
      validation: Rule => [
        Rule.required()
          .min(1)
          .max(4)
          .error('Required field with at least 1 and at most 4 items.'),
      ],
    },
    {
      name: 'timePerSlide',
      title: 'Seconds per Slide',
      fieldset: 'cards',
      description:
        'Number of seconds before advancing to next slide, between 1 - 10. Default is 3 seconds.',
      type: 'number',
      validation: Rule => [
        Rule.min(1).max(10).error('Must be between 1-10 seconds.'),
      ],
    },
    {
      ...moduleStyle,
      description: 'Default is "Dark"',
      fieldset: 'appearance',
    },
    {
      name: 'deviceView',
      title: 'Device View',
      description:
        'Sets the module to display the carousel framed within a mobile phone. Default is false.',
      type: 'boolean',
      fieldset: 'appearance',
    },
    {
      name: 'heroHeaderView',
      title: 'Hero Header View',
      description:
        'Sets the section header content to display as a hero above the carousel. Default is true.',
      type: 'boolean',
      fieldset: 'appearance',
    },
  ],
  preview: {
    select: {
      title: 'sectionHeader.heading',
    },
    prepare: ({ title }) => {
      return {
        title: 'Caption Carousel',
        subtitle: title,
      };
    },
  },
};

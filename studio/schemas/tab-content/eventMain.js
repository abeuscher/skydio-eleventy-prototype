export default {
  name: 'eventMain',
  title: 'Event Content',
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
  ],
  fields: [
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
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'ctalabel',
      title: 'CTA Label',
      type: 'string',
      description: 'If left blank CTA will not appear',
    },
    {
      name: 'ctaurl',
      title: 'CTA URL',
      type: 'url',
      description: 'If left blank CTA will not appear',
    },
    {
      name: 'startTime',
      title: 'Start Time',
      type: 'datetime',
      description: 'Enter event start time',
      validation: Rule =>
        Rule.custom((startTime, context) => {
          if (startTime >= context.parent.endTime) {
            return 'The event must start before it ends.';
          }
          return true;
        }),
    },
    {
      name: 'endTime',
      title: 'End time',
      type: 'datetime',
      description: 'Enter event end time',
      validation: Rule =>
        Rule.custom((endTime, context) => {
          if (endTime <= context.parent.startTime) {
            return 'The event must end after it starts.';
          }
          return true;
        }),
    },
    {
      name: 'timeZone',
      title: 'Time Zone',
      description: '',
      type: 'string',
      initialValue: 'PST',
    },
    {
      name: 'showDateOnly',
      title: 'Show Date Only',
      description: 'Show only start date with no time or span.',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'noEventPage',
      title: 'Remove Page Link',
      description: 'Remove link to event page from list entry.',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'eventLocation',
      title: 'Select a location or add one if needed.',
      type: 'reference',
      to: [
        {
          type: 'eventlocation',
        },
      ],
      validation: Rule => Rule.required(),
    },
    {
      name: 'eventType',
      title: 'Event Type',
      type: 'reference',
      to: [
        {
          type: 'eventtype',
        },
      ],
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
      description: 'Maximum 200 characters',
      validation: Rule => Rule.max(200),
    },
    {
      name: 'modules',
      title: 'Post Modules',
      type: 'postModules',
    },
  ],
};

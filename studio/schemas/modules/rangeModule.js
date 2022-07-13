export default {
  name: 'rangeModule',
  title: 'Range Module',
  type: 'object',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
    },
    {
      name: 'sectionCopy',
      title: 'Section Copy',
      type: 'string',
    },
    {
      name: 'barColors',
      title: 'Bar Colors',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'environments',
      title: 'Environments',
      type: 'array',
      of: [{ type: 'rangeEnvironment' }],
    },
    {
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [{ type: 'rangeSlide' }],
    },
    {
      title: 'Show Disclaimer?',
      name: 'showDisclaimer',
      type: 'boolean',
    },
  ],
};

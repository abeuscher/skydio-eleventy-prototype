export default {
  title: 'Link',
  name: 'link',
  type: 'object',
  options: {
    collapsed: false,
    collapsible: false,
  },
  validation: Rule =>
    Rule.custom(field => {
      if (!field) {
        return true;
      }

      const { internalLink, externalLink } = field;

      // Error if the field has more than one of the possible values.
      return externalLink?.link && (internalLink?.path || internalLink?.link)
        ? 'Set an internal link or an external link, but not both.'
        : true;
    }),
  fields: [
    {
      name: 'condition',
      title: 'Link Type',
      type: 'string',
      options: {
        list: [
          {
            title: 'Internal: inside this website',
            value: 'internalLink',
          },
          {
            title: 'External: outside this website',
            value: 'externalLink',
          },
        ],
        layout: 'radio', // <-- leave out to make it a dropdown menu
      },
    },
    {
      title: 'Internal Link',
      name: 'internalLink',
      type: 'internalLink',
      options: {
        collapsed: false,
        collapsible: false,
      },
      hidden: ({ parent }) =>
        !parent?.condition || parent.condition !== 'internalLink',
    },
    {
      name: 'externalLink',
      title: 'External Link',
      type: 'externalLink',
      options: {
        collapsed: false,
        collapsible: false,
      },
      hidden: ({ parent }) =>
        !parent?.condition || parent.condition !== 'externalLink',
    },
  ],
};

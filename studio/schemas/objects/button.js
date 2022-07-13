export default {
  title: 'Button',
  name: 'button',
  type: 'object',
  initialValue: {
    style: 'primary',
    size: 'default',
  },
  fields: [
    {
      name: 'text',
      title: 'Button Text',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'link',
      title: 'Button Link',
      type: 'link',
      validation: Rule => Rule.required(),
    },
    {
      name: 'icon',
      title: 'Button Icon',
      type: 'image',
      accept: 'image/svg+xml',
      description: 'Only accepts SVG formatted image files.',
      validation: Rule =>
        Rule.optional().custom(icon => {
          // TODO: Seems like we should be able to query the referenced image asset to
          // validate against the image extension instead of the generated ref id but it
          // is proving quite tricky. This discussion should help provide some context.
          // https://sanity-io-land.slack.com/archives/C9Z7RC3V1/p1606311766218600
          if (icon.asset._ref.includes('-svg')) {
            return true;
          }
          return 'Must be SVG';
        }),
    },
    {
      title: 'Style',
      name: 'style',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' },
          { title: 'Tertiary', value: 'tertiary' },
          { title: 'Plain', value: 'plain' },
        ],
      },
    },
    {
      title: 'Size',
      name: 'size',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Small', value: 'small' },
          { title: 'Large', value: 'large' },
        ],
      },
    },
  ],
};

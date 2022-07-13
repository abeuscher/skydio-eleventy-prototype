export default {
  name: 'productOptions',
  title: 'Options',
  type: 'object',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Values',
      name: 'values',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
  readOnly: true,
};

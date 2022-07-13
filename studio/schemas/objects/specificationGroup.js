const specificationGroup = {
  name: 'specificationGroup',
  title: 'Specification Group',
  type: 'object',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      name: 'values',
      title: 'Specification Values',
      type: 'array',
      of: [
        {
          type: 'specificationValue',
        },
      ],
    },
  ],
};

const specificationValue = {
  name: 'specificationValue',
  type: 'object',
  title: 'Specification Value',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'value',
      title: 'Value',
      type: 'text',
      rows: 3,
    },
  ],
};

export { specificationGroup, specificationValue };

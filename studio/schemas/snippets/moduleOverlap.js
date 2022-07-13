const moduleOverlap = {
  name: 'moduleOverlap',
  title: 'Module Overlap',
  description:
    'The vertical overlap with the next section on the page. Default is "none"',
  type: 'string',
  options: {
    list: [
      { title: 'None', value: 'none' },
      { title: 'Light', value: 'light' },
      { title: 'Medium Light', value: 'medium-light' },
      { title: 'Medium', value: 'medium' },
      { title: 'Medium Dark', value: 'medium-dark' },
      { title: 'Dark', value: 'dark' },
    ],
  },
  initialValue: 'none',
};

export default moduleOverlap;

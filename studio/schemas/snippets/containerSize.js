const containerSize = {
  name: 'containerSize',
  title: 'Container Size',
  description: 'This will change the max width for the content.',
  type: 'string',
  options: {
    list: [
      { title: 'Small', value: 'small' },
      { title: 'Medium', value: 'medium' },
      { title: 'Large', value: 'large' },
    ],
  },
  initialValue: 'large',
};

export default containerSize;

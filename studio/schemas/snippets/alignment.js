const horizontalAlignment = {
  name: 'horizontalAlignment',
  title: 'Horizontal Alignment',
  type: 'string',
  options: {
    list: [
      { title: 'Left', value: 'left' },
      { title: 'Center', value: 'center' },
      { title: 'Right', value: 'right' },
    ],
    layout: 'radio',
    direction: 'horizontal',
  },
  initialValue: 'center',
};

const verticalAlignment = {
  name: 'verticalAlignment',
  title: 'Vertical Alignment',
  type: 'string',
  options: {
    list: [
      { title: 'Top', value: 'top' },
      { title: 'Center', value: 'center' },
      { title: 'Bottom', value: 'bottom' },
    ],
    layout: 'radio',
    direction: 'horizontal',
  },
  initialValue: 'center',
};

export { horizontalAlignment, verticalAlignment };

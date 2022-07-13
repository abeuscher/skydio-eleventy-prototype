import { MdLocalPizza } from 'react-icons/md';

export default {
  name: 'disclaimerModule',
  title: 'DisclaimerModule',
  type: 'object',
  icon: MdLocalPizza,
  fields: [
    {
      name: 'disclaimerStyle',
      title: 'Toggle Black / white',
      type: 'boolean',
    },
  ],
  preview: {
    prepare: () => {
      return {
        title: 'Disclaimer Module',
      };
    },
  },
};

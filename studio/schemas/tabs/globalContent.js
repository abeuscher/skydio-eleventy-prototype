import Tabs from 'sanity-plugin-tabs';

export default {
  name: 'globalContent',
  title: 'Global Content',
  type: 'object',
  inputComponent: Tabs,
  fieldsets: [
    { name: 'defaultMeta', title: 'Meta' },
    { name: 'social', title: 'Social' },
  ],
  fields: [
    {
      type: 'metaCard',
      name: 'globalMeta',
      description: 'Handles the default meta information for all content types',
      fieldset: 'defaultMeta',
    },
    {
      type: 'social',
      name: 'social',
      description: 'Handles the default meta information for all content types',
      fieldset: 'social',
    },
  ],
};

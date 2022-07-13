import Tabs from 'sanity-plugin-tabs';

export default {
  name: 'modelContent',
  type: 'object',
  title: 'Model',
  inputComponent: Tabs,
  fieldsets: [
    { name: 'main', title: 'Main' },
    { name: 'defaultMeta', title: 'Meta' },
  ],
  fields: [
    {
      name: 'main',
      type: 'modelMain',
      fieldset: 'main',
    },
    {
      name: 'meta',
      type: 'metaCard',
      fieldset: 'defaultMeta',
    },
  ],
};

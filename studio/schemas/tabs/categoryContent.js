import Tabs from 'sanity-plugin-tabs';

export default {
  name: 'categoryContent',
  type: 'document',
  title: 'Category',
  inputComponent: Tabs,
  fieldsets: [
    { name: 'main', title: 'Main' },
    { name: 'defaultMeta', title: 'Meta' },
  ],
  fields: [
    {
      name: 'main',
      type: 'categoryMain',
      fieldset: 'main',
    },
    {
      name: 'meta',
      type: 'metaCard',
      fieldset: 'defaultMeta',
    },
  ],
};

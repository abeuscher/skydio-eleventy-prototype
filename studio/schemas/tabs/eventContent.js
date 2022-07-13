import Tabs from 'sanity-plugin-tabs';

export default {
  name: 'eventContent',
  type: 'object',
  title: 'Event',
  inputComponent: Tabs,
  fieldsets: [
    { name: 'main', title: 'Main' },
    { name: 'defaultMeta', title: 'Meta' },
  ],
  fields: [
    {
      name: 'main',
      type: 'eventMain',
      fieldset: 'main',
    },
    {
      name: 'meta',
      type: 'metaCard',
      fieldset: 'defaultMeta',
    },
  ],
};

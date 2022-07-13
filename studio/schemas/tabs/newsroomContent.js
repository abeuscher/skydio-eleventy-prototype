import Tabs from 'sanity-plugin-tabs';

export default {
  name: 'newsroomContent',
  type: 'object',
  title: 'Newsroom Content',
  inputComponent: Tabs,
  fieldsets: [
    { name: 'main', title: 'Main' },
    { name: 'defaultMeta', title: 'Meta' },
  ],
  fields: [
    {
      name: 'main',
      type: 'newsroomMain',
      fieldset: 'main',
    },
    {
      name: 'meta',
      type: 'metaCard',
      fieldset: 'defaultMeta',
    },
  ],
};

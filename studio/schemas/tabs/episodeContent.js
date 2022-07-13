import Tabs from 'sanity-plugin-tabs';

export default {
  name: 'episodeContent',
  type: 'object',
  title: 'Episode',
  inputComponent: Tabs,
  fieldsets: [
    { name: 'main', title: 'Main' },
    { name: 'defaultMeta', title: 'Meta' },
  ],
  fields: [
    {
      name: 'main',
      type: 'episodeMain',
      fieldset: 'main',
    },
    {
      name: 'meta',
      type: 'metaCard',
      fieldset: 'defaultMeta',
    },
  ],
};

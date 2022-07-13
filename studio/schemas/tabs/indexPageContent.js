import Tabs from 'sanity-plugin-tabs';

export default {
  name: 'indexPageContent',
  type: 'object',
  title: 'Index Page Content',
  inputComponent: Tabs,
  fieldsets: [
    { name: 'main', title: 'Main' },
    { name: 'defaultMeta', title: 'Meta' },
  ],
  fields: [
    {
      type: 'indexPageMain',
      name: 'main',
      fieldset: 'main',
    },
    {
      type: 'indexPageMetaCard',
      name: 'indexMeta',
      title: 'Index Page Meta',
      fieldset: 'defaultMeta',
    },
    {
      type: 'metaCard',
      name: 'meta',
      fieldset: 'defaultMeta',
    },
  ],
};

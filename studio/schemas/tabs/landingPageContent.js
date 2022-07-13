import Tabs from 'sanity-plugin-tabs';

export default {
  name: 'landingPageContent',
  type: 'object',
  title: 'Landing Page Content',
  inputComponent: Tabs,
  fieldsets: [
    { name: 'main', title: 'Main' },
    { name: 'defaultMeta', title: 'Meta' },
  ],
  fields: [
    {
      type: 'landingPageMain',
      name: 'main',
      fieldset: 'main',
    },
    {
      type: 'metaCard',
      name: 'meta',
      fieldset: 'defaultMeta',
    },
  ],
};

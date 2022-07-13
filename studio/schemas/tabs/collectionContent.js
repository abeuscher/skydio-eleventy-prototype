import Tabs from 'sanity-plugin-tabs';

export default {
  name: 'collectionContent',
  title: 'Collection Content',
  type: 'object',
  inputComponent: Tabs,
  liveEdit: false,
  fieldsets: [
    { name: 'main', title: 'Main' },
    { name: 'shopify', title: 'Shopify' },
    { name: 'defaultMeta', title: 'Meta' },
  ],
  fields: [
    {
      type: 'collectionMain',
      name: 'main',
      fieldset: 'main',
    },
    {
      type: 'collectionShopify',
      name: 'shopify',
      fieldset: 'shopify',
    },
    {
      type: 'metaCard',
      name: 'meta',
      fieldset: 'defaultMeta',
    },
  ],
  preview: {
    select: {
      title: 'main.title',
    },
  },
};

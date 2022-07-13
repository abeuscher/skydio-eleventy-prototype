import Tabs from 'sanity-plugin-tabs';

export default {
  name: 'productContent',
  title: 'Product Content',
  type: 'object',
  inputComponent: Tabs,
  fieldsets: [
    { name: 'main', title: 'Main' },
    { name: 'shopify', title: 'Shopify' },
    { name: 'defaultMeta', title: 'Meta' },
  ],
  fields: [
    {
      type: 'productMain',
      name: 'main',
      fieldset: 'main',
    },
    {
      type: 'productShopify',
      name: 'shopify',
      fieldset: 'shopify',
    },
    {
      type: 'metaCard',
      name: 'meta',
      fieldset: 'defaultMeta',
    },
  ],
};

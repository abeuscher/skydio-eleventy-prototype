import Tabs from 'sanity-plugin-tabs';

export default {
  name: 'variantContent',
  title: 'Variant Content',
  type: 'object',
  inputComponent: Tabs,
  fieldsets: [
    { name: 'main', title: 'Main' },
    { name: 'shopify', title: 'Shopify' },
  ],
  fields: [
    {
      type: 'variantMain',
      name: 'main',
      fieldset: 'main',
    },
    {
      type: 'variantShopify',
      name: 'shopify',
      fieldset: 'shopify',
    },
  ],
};

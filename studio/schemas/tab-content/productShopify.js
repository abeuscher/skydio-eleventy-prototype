export default {
  title: 'Shopify Product Content',
  name: 'productShopify',
  type: 'object',
  fieldsets: [
    {
      name: 'default',
      title: 'Default Variant',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'deleted',
      title: 'Deleted',
      type: 'boolean',
      description: 'This can be a flag set if the item is deleted from Shopify',
      readOnly: true,
    },
    {
      name: 'productId',
      title: 'Product ID',
      type: 'string',
      description: 'This comes from Shopify and cannot be changed',
      readOnly: true,
      // hidden: true
    },
    {
      name: 'globalId',
      title: 'Global ID',
      type: 'string',
      description: 'This comes from Shopify and cannot be changed',
      readOnly: true,
    },
    {
      name: 'defaultPrice',
      title: 'Default Price',
      type: 'string',
      description: 'This comes from Shopify and cannot be changed',
      readOnly: true,
    },
    {
      name: 'compareAtPrice',
      title: 'Compare at Price',
      type: 'string',
      description: 'This comes from Shopify and cannot be changed',
      readOnly: true,
    },
    {
      name: 'productType',
      title: 'Product Type',
      type: 'string',
      description: 'This comes from Shopify and cannot be changed',
      readOnly: true,
    },
    {
      name: 'vendor',
      title: 'Vendor',
      type: 'string',
      description: 'This comes from Shopify and cannot be changed',
      readOnly: true,
    },
    {
      name: 'tags',
      title: 'Tags',
      description: 'This comes from Shopify and cannot be changed',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      readOnly: true,
    },
    {
      name: 'collections',
      title: 'Collections',
      description: 'This comes from Shopify and cannot be changed',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      readOnly: true,
    },
    {
      name: 'options',
      title: 'Options',
      description: 'This comes from Shopify and cannot be changed',
      type: 'array',
      of: [{ type: 'productOptions' }],
      readOnly: true,
    },
    {
      name: 'variants',
      title: 'Variants',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'productVariant' } }],
      readOnly: true,
    },
    {
      name: 'lastSynced',
      title: 'Last Synced',
      type: 'datetime',
      description: 'This is set by our syncing tools and cannot be changed',
      readOnly: true,
    },
  ],
};

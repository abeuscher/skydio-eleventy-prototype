export default {
  title: 'Shopify Collection Content',
  name: 'collectionShopify',
  type: 'object',
  hidden: true,
  fields: [
    {
      name: 'collectionTitle',
      title: 'Collection Title',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'handle',
      title: 'Collection handle',
      type: 'string',
      description: 'This comes from Shopify and cannot be changed',
      readOnly: true,
    },
    {
      name: 'count',
      title: 'Product count',
      type: 'number',
      description: 'This comes from Shopify and cannot be changed',
      readOnly: true,
    },
    {
      name: 'products',
      title: 'Products',
      description: 'This comes from Shopify and cannot be changed',
      type: 'array',
      of: [{ type: 'productReference' }],
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

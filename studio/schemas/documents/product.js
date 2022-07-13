export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'delete'],
  fields: [
    {
      name: 'content',
      type: 'productContent',
    },
  ],
  preview: {
    select: {
      title: 'content.main.title',
      syncedAt: 'content.shopify.lastSynced',
      price: 'content.shopify.defaultPrice',
      media: 'content.main.mainImage',
    },
    prepare({ title, price, syncedAt = {}, media }) {
      const date = new Date(syncedAt);

      return {
        title,
        media,
        subtitle: `$${Math.floor(price)}`,
        description: `Last synced: ${date.toLocaleString()}`,
      };
    },
  },
};

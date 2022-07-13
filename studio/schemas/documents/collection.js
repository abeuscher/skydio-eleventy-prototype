import { BsFillCollectionFill } from 'react-icons/bs';

export default {
  name: 'collection',
  title: 'Collection',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'delete'],
  fields: [
    {
      name: 'content',
      type: 'collectionContent',
    },
  ],
  preview: {
    select: {
      title: 'content.main.title',
      syncedAt: 'content.shopify.lastSynced',
      products: 'content.shopify.products',
    },
    prepare({ title, products, syncedAt = {} }) {
      const date = new Date(syncedAt);
      const numProducts = products.length;

      return {
        title,
        media: BsFillCollectionFill,
        subtitle: `${numProducts} products`,
        description: `Last synced: ${date.toLocaleString()}`,
      };
    },
  },
};

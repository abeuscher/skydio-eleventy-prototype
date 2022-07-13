export default {
  title: 'Product Image',
  name: 'productImage',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'variant',
      title: 'Variant',
      type: 'reference',
      to: [{ type: 'productVariant' }],
      description: 'Select a variant this product represents',
      options: {
        filter: ({ document }) => {
          if (
            !document.content ||
            !document.content.shopify ||
            !document.content.shopify.productId
          ) {
            return {};
          }

          return {
            filter: 'content.shopify.productId == $id',
            params: {
              id: document.content.shopify.productId,
            },
          };
        },
      },
    },
  ],
  preview: {
    select: {
      image: 'image',
      variant: 'variant',
    },
    prepare(selection) {
      const { image, variant } = selection;

      return {
        title: variant ? 'Variant Image' : 'Image',
        media: image,
      };
    },
  },
};

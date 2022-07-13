export default {
  name: 'productReference',
  type: 'object',
  title: 'Product reference',
  fields: [
    {
      name: 'product',
      type: 'reference',
      to: [
        {
          type: 'product',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'product.content.main.title',
      media: 'product.content.main.mainImage.asset',
    },
  },
};

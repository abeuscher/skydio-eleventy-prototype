export default {
  name: 'productFeatureItem',
  title: 'Product Feature Item',
  type: 'object',
  fieldsets: [
    {
      name: 'content',
      title: 'Content Settings',
      description:
        'Content settings override any values obtained from the product.',
    },
  ],
  fields: [
    {
      name: 'product',
      title: 'Product',
      type: 'reference',
      description:
        'Adding a product reference will set default values for the title, image, and price fields (which can be overridden below)',
      to: [{ type: 'product' }],
    },
    {
      name: 'badge',
      title: 'Badge',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'figure',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'Enter a price in cents, eg. 90000 for $900.',
    },
    {
      name: 'cta',
      title: 'Call to Action',
      type: 'button',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockText',
      description:
        'Optional content, paragraphs will have lines between them, bold will be pink',
    },
  ],
  preview: {
    select: {
      productTitle: 'product.content.main.title',
      itemTitle: 'title',
    },
    prepare({ productTitle, itemTitle }) {
      const title = itemTitle || productTitle;

      return {
        title,
      };
    },
  },
};

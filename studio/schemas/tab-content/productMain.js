export default {
  title: 'Product Content',
  name: 'productMain',
  type: 'object',
  fieldsets: [
    {
      name: 'main',
      title: 'Product Details',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      readOnly: true,
      description: 'This is set in Shopify and cannot be changed',
      options: {
        source: 'content.main.title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      fieldset: 'main',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'images',
      title: 'Additional Images',
      type: 'array',
      of: [{ type: 'productImage' }],
      fieldset: 'main',
    },
    {
      name: 'productDescription',
      title: 'Product Description',
      type: 'blockContent',
      fieldset: 'main',
    },
    {
      name: 'modules',
      title: 'Product Modules',
      type: 'productModules',
    },
  ],
};

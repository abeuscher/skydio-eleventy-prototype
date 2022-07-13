import { FiLink2 } from 'react-icons/fi';

export default {
  title: 'Internal Link',
  name: 'internalLink',
  type: 'object',
  icon: FiLink2,
  blockEditor: {
    icon: FiLink2,
  },
  description:
    'Add either a reference to a document OR a path to an internal page.',
  validation: Rule =>
    Rule.custom((internalLink, context) => {
      // Only trigger the rule when the condition selected is internalLink
      if (context?.parent?.condition !== 'internalLink') {
        return true;
      }

      const linkIsDefined = typeof internalLink?.link !== 'undefined';
      const pathIsDefined = typeof internalLink?.path !== 'undefined';

      // We want a link or a path but not both
      return linkIsDefined && pathIsDefined
        ? 'Select a reference or a path, not both.'
        : true;
    }),
  fields: [
    {
      name: 'link',
      title: 'Reference',
      type: 'reference',
      description:
        'A reference to a product, collection, page, post, event, model, or episode.',
      // If adding new types you must also update the useSanitySlug file to account for this new types.
      to: [
        { type: 'page' },
        { type: 'landingPage' },
        { type: 'indexPage' },
        { type: 'product' },
        { type: 'collection' },
        { type: 'post' },
        { type: 'event' },
        { type: 'model' },
        { type: 'episode' },
      ],
    },
    {
      name: 'path',
      title: 'Path',
      type: 'url',
      description:
        'A relative path to an internal page. Anchor links must use the full relative path.',
      validation: Rule =>
        Rule.uri({
          allowRelative: true,
          relativeOnly: true,
        }),
    },
  ],
};

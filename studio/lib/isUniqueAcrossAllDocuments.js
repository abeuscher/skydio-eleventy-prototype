import sanityClient from 'part:@sanity/base/client';

// Note: this assumes that every document that has a slug field
// have it on the `slug` field in the main content tab
export function isUniqueAcrossAllDocuments(slug, options) {
  const { document } = options;
  const { _type } = document;

  // Remove the 'drafts.' path
  let id = document._id.replace(/^drafts\./, '');

  // If it's a translation, also remove the locale path at the end of the id
  if (id.includes('i18n')) {
    id = id.replace(/^i18n\./, '').split('.')[0];
  }

  const params = {
    draft: `drafts.${id}`,
    published: id,
    translation: `i18n.${id}`,
    translationDraft: `drafts.i18n.${id}`,
    slug,
  };

  // isUnique function that checks for uniqueness of slug across all
  // matching types in dataset, but excludes drafts and translations of the same base id
  const customParams = getQueryParams(_type);
  const query = `!defined(*[
    _type in ${JSON.stringify(customParams.types)}
    && !(_id in [$draft, $published])
    && !(_id in path($translation + ".**") || _id in path($translationDraft + ".**"))
    && ${customParams.slugPath} == $slug
  ][0]._id)`;

  const client = sanityClient.withConfig({
    apiVersion: '2021-03-25',
  });
  return client.fetch(query, params);
}

/**
 * Provides unique params for the query based on the doc type
 *
 * @param {*} documentType
 * @returns {Object}
 */
const getQueryParams = documentType => {
  const params = {
    types: [documentType],
    slugPath: 'content.main.slug.current',
  };

  switch (documentType) {
    case 'page':
    case 'landingPage':
    case 'indexPage':
      params.types = ['page', 'landingPage', 'indexPage'];
      return params;

    case 'navigation':
      params.slugPath = 'slug.current';
      return params;

    default:
      return params;
  }
};

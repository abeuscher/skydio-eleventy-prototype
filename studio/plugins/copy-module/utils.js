import client from 'part:@sanity/base/client';

const I18nDelimiter = '__i18n_';
const I18nPrefix = '18n';

export const getSanityClient = () => {
  return client.withConfig({ apiVersion: `2021-10-01` });
};

export const getBaseIdFromId = id => {
  const nonDraftId = id.replace(/^drafts\./, '');

  // subpath
  const rx = new RegExp(`${I18nPrefix}\\.([^.]+)\\.[^.]+`);
  const match = nonDraftId.match(rx);
  if (match && match.length === 2) {
    return match[1];
  }

  // delimiter
  const split = nonDraftId.split(I18nDelimiter);
  if (split.length > 0) {
    return split[0];
  }

  return nonDraftId;
};

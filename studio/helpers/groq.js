// This file is for premade queries used across the project.

// Filters

// Queries all non ids without i18n at the front or after draft.
export const allNonTranslationIds = `!(_id in path("i18n.**")) && !(_id in path("drafts.i18n.**"))`;

// Queries all child pages with parents and returns an array containing the parent document for each child
export const allParentPageQuery = `*[_type == "page" && defined(content.main.parent._ref)]{'parent': content.main.parent->}`;

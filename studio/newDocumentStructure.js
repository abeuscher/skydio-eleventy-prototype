/**
 *
 * This file controls how items appear in the main "new document" menu.
 * https://www.sanity.io/docs/initial-value-templates#configuring-the-new-document-menu-56b4073ca73a
 * Unfortunately this does not alter the "new document" button in
 * the document's header, so we'll keep the deprecated __experimental_actions
 * in the schema declaration for now.
 *
 */

import S from '@sanity/base/structure-builder';

const excludedDocuments = ['product', 'collection', 'siteConfig', 'siteGlobal'];

export default [
  ...S.defaultInitialValueTemplateItems().filter(
    item => !excludedDocuments.includes(item.spec.id),
  ),
];

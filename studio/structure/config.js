import * as Structure from 'sanity-plugin-intl-input/lib/structure';

import { RiSettings5Line } from 'react-icons/ri';
import S from '@sanity/desk-tool/structure-builder';
import { allNonTranslationIds } from '../helpers/groq';

export const ConfigMenu = S.listItem()
  .title('Site Settings')
  .icon(RiSettings5Line)
  .child(
    S.list()
      .title('Settings')
      .items([
        S.documentListItem()
          .title('Global Meta & Social')
          .id('siteGlobal')
          .schemaType('siteGlobal'),
        S.documentListItem()
          .title('Site Config')
          .id('siteConfig')
          .schemaType('siteConfig'),
        S.listItem()
          .title('Announcement Banner')
          .child(
            S.document()
              .schemaType('announcementBanner')
              .documentId('announcementBanner')
              .views(
                Structure.getDocumentNodeViewsForSchemaType(
                  'announcementBanner',
                ),
              ),
          ),
        S.documentListItem()
          .title('Redirects')
          .id('redirects')
          .schemaType('redirects'),
        S.listItem()
          .title('Navigation')
          .child(
            S.documentList('navigation')
              .title('Navigation')
              .filter(`_type == "navigation" && ${allNonTranslationIds}`)
              .canHandleIntent(
                (intent, params) =>
                  (intent === 'create' || intent === 'edit') &&
                  params.type === 'navigation',
              )
              .child(
                S.document().views(
                  Structure.getDocumentNodeViewsForSchemaType('navigation'),
                ),
              ),
          ),
      ]),
  );

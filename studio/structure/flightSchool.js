import * as Structure from 'sanity-plugin-intl-input/lib/structure';

import { GoArchive as AllIcon } from 'react-icons/go';
import { GiAirplane } from 'react-icons/gi';
import S from '@sanity/desk-tool/structure-builder';
import { allNonTranslationIds } from '../helpers/groq';
import { preview } from './views/preview';

export const FlightSchoolMenu = S.listItem()
  .title('Flight School')
  .icon(GiAirplane)
  .child(
    S.list()
      .title('Episodes')
      .items([
        S.listItem()
          .title('All episodes')
          .schemaType('episode')
          .icon(AllIcon)
          .child(
            S.documentList('episode')
              .title('All Episodes')
              .menuItems(S.documentTypeList('episode').getMenuItems())
              .filter(`_type == "episode" && ${allNonTranslationIds}`)
              .canHandleIntent(
                (intent, params) =>
                  (intent === 'create' || intent === 'edit') &&
                  params.type === 'episode',
              )
              .child(documentId =>
                S.document()
                  .documentId(documentId)
                  .schemaType('episode')
                  .views([
                    ...Structure.getDocumentNodeViewsForSchemaType('episode'),
                    preview(),
                  ]),
              ),
          ),

        S.divider(),

        S.listItem()
          .title('Series')
          .schemaType('series')
          .child(
            S.documentTypeList('series')
              .title('Collections')
              .menuItems(S.documentTypeList('series').getMenuItems())
              .filter(`_type == "series" && ${allNonTranslationIds}`)
              .canHandleIntent(
                (intent, params) =>
                  (intent === 'create' || intent === 'edit') &&
                  params.type === 'series',
              )
              .child(documentId =>
                S.document()
                  .documentId(documentId)
                  .schemaType('series')
                  .views([
                    ...Structure.getDocumentNodeViewsForSchemaType('series'),
                  ]),
              ),
          ),
      ]),
  );

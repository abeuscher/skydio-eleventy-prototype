import * as Structure from 'sanity-plugin-intl-input/lib/structure';

import { GoArchive as AllIcon, GoCalendar as EventIcon } from 'react-icons/go';

import S from '@sanity/desk-tool/structure-builder';
import { allNonTranslationIds } from '../helpers/groq';
import { preview } from './views/preview';

export const ResourceMenu = S.listItem()
  .title('Resources')
  .icon(EventIcon)
  .child(
    S.list()
      .title('Resources')
      .items([
        S.listItem()
          .title('Resources')
          .schemaType('resource')
          .icon(AllIcon)
          .child(
            S.documentList('resource')
              .title('All Resources')
              .menuItems(S.documentTypeList('resource').getMenuItems())
              .filter(`_type == "resource" && ${allNonTranslationIds}`)
              .canHandleIntent(
                (intent, params) =>
                  (intent === 'create' || intent === 'edit') &&
                  params.type === 'resource',
              )
              .child(documentId =>
                S.document()
                  .documentId(documentId)
                  .schemaType('resource')
                  .views([
                    ...Structure.getDocumentNodeViewsForSchemaType('resource'),
                    preview(),
                  ]),
              ),
          ),
        S.divider(),

        S.listItem()
          .title('Resource Types')
          .schemaType('resourceType')
          .child(S.documentTypeList('resourceType').title('Resource Types')),
      ]),
  );

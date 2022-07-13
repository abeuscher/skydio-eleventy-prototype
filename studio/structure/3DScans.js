import * as Structure from 'sanity-plugin-intl-input/lib/structure';

import { AiOutlineScan } from 'react-icons/ai';
import { GoArchive as AllIcon } from 'react-icons/go';
import S from '@sanity/desk-tool/structure-builder';
import { allNonTranslationIds } from '../helpers/groq';
import { preview } from './views/preview';

export const ScansMenu = S.listItem()
  .title('3D Scans')
  .icon(AiOutlineScan)
  .child(
    S.list()
      .title('Models')
      .items([
        S.listItem()
          .title('All models')
          .schemaType('model')
          .icon(AllIcon)
          .child(
            S.documentList('model')
              .title('All Models')
              .menuItems(S.documentTypeList('model').getMenuItems())
              .filter(`_type == "model" && ${allNonTranslationIds}`)
              .canHandleIntent(
                (intent, params) =>
                  (intent === 'create' || intent === 'edit') &&
                  params.type === 'model',
              )
              .child(documentId =>
                S.document()
                  .documentId(documentId)
                  .schemaType('model')
                  .views([
                    ...Structure.getDocumentNodeViewsForSchemaType('model'),
                    preview(),
                  ]),
              ),
          ),

        S.divider(),

        S.listItem()
          .title('Collections')
          .schemaType('modelCollection')
          .child(
            S.documentTypeList('modelCollection')
              .title('Collections')
              .menuItems(S.documentTypeList('modelCollection').getMenuItems())
              .filter(`_type == "modelCollection" && ${allNonTranslationIds}`)
              .canHandleIntent(
                (intent, params) =>
                  (intent === 'create' || intent === 'edit') &&
                  params.type === 'modelCollection',
              )
              .child(documentId =>
                S.document()
                  .documentId(documentId)
                  .schemaType('modelCollection')
                  .views([
                    ...Structure.getDocumentNodeViewsForSchemaType(
                      'modelCollection',
                    ),
                  ]),
              ),
          ),
      ]),
  );

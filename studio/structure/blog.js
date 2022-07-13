import * as Structure from 'sanity-plugin-intl-input/lib/structure';

import { GoArchive as AllIcon, GoMegaphone as BlogIcon } from 'react-icons/go';

import S from '@sanity/desk-tool/structure-builder';
import { allNonTranslationIds } from '../helpers/groq';
import { preview } from './views/preview';

export const BlogMenu = S.listItem()
  .title('Blog')
  .icon(BlogIcon)
  .child(
    S.list()
      .title('Posts')
      .items([
        S.listItem()
          .title('All posts')
          .schemaType('post')
          .icon(AllIcon)
          .child(
            S.documentList('post')
              .title('All Posts')
              .menuItems(S.documentTypeList('post').getMenuItems())
              .filter(`_type == "post" && ${allNonTranslationIds}`)
              .canHandleIntent(
                (intent, params) =>
                  (intent === 'create' || intent === 'edit') &&
                  params.type === 'post',
              )
              .child(documentId =>
                S.document()
                  .documentId(documentId)
                  .schemaType('post')
                  .views([
                    ...Structure.getDocumentNodeViewsForSchemaType('post'),
                    preview(),
                  ]),
              ),
          ),

        S.divider(),

        S.listItem()
          .title('Categories')
          .schemaType('category')
          .child(S.documentTypeList('category').title('Categories')),
      ]),
  );

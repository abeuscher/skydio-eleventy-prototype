import * as Structure from 'sanity-plugin-intl-input/lib/structure';

import { RiHomeHeartLine, RiPagesLine } from 'react-icons/ri';
import { allNonTranslationIds, allParentPageQuery } from '../helpers/groq';

import { GoArchive as AllIcon } from 'react-icons/go';
import { BsNewspaper } from 'react-icons/bs';
import S from '@sanity/desk-tool/structure-builder';
import documentStore from 'part:@sanity/base/datastore/document';
import { map } from 'rxjs/operators';
import { preview } from './views/preview';
import uniqBy from 'lodash.uniqby';

/**
 *
 * Home Page uses dynamic query based on value set in siteConfig
 * Reference: https://www.sanity.io/docs/structure-builder-typical-use-cases#defining-a-structure-asynchronously-with-promises-or-observables-980dd321b9db
 *
 * Child Page Reference: https://gist.github.com/kmelve/28a1deb84fc3b351183b239e3191a5ae
 *
 */

export const PageMenuItem = S.listItem()
  .title('Pages')
  .icon(RiPagesLine)
  .child(
    S.list()
      .title('Pages')
      .items([
        S.listItem()
          .title('Home Page')
          .icon(RiHomeHeartLine)
          .child(() =>
            documentStore.listenQuery(`*[_id == 'siteConfig'][0]`).pipe(
              map(siteConfigDoc =>
                S.document({
                  schemaType: 'landingPage',
                  id: siteConfigDoc?.frontpage._ref,
                })
                  .schemaType('landingPage')
                  .views([
                    ...Structure.getDocumentNodeViewsForSchemaType(
                      'landingPage',
                    ),
                    preview(),
                  ]),
              ),
            ),
          ),

        S.divider(),

        S.listItem()
          .title('Landing Pages')
          .schemaType('landingPage')
          .child(() =>
            documentStore.listenQuery(`*[_id == 'siteConfig'][0]`).pipe(
              map(siteConfigDoc =>
                S.documentList()
                  .canHandleIntent(
                    (intent, params) =>
                      (intent === 'create' || intent === 'edit') &&
                      params.type === 'landingPage',
                  )
                  .title('Landing Pages')
                  .menuItems(S.documentTypeList('landingPage').getMenuItems())
                  // Filter for landing pages that aren't the frontpage or frontpage draft
                  .filter(
                    `_type == "landingPage" && (_id != "${siteConfigDoc?.frontpage._ref}" && _id != "drafts.${siteConfigDoc?.frontpage._ref}" && ${allNonTranslationIds})`,
                  )
                  .canHandleIntent(
                    (intent, params) =>
                      (intent === 'create' || intent === 'edit') &&
                      params.type === 'landingPage',
                  )
                  .child(
                    S.document()
                      .schemaType('landingPage')
                      .views([
                        ...Structure.getDocumentNodeViewsForSchemaType(
                          'landingPage',
                        ),
                        preview(),
                      ]),
                  ),
              ),
            ),
          ),

        S.listItem()
          .title('Content Pages')
          .icon(RiPagesLine)
          .child(
            S.list()
              .title('Content Pages')
              .items([
                S.listItem()
                  .title('All Content Pages')
                  .icon(RiPagesLine)
                  .child(
                    S.documentList()
                      .title('All Content Pages')
                      .menuItems(S.documentTypeList('page').getMenuItems())
                      .filter(`_type == "page" && ${allNonTranslationIds}`)
                      .canHandleIntent(
                        (intent, params) =>
                          (intent === 'create' || intent === 'edit') &&
                          params.type === 'page',
                      )
                      .child(
                        S.document()
                          .schemaType('page')
                          .views([
                            ...Structure.getDocumentNodeViewsForSchemaType(
                              'page',
                            ),
                            preview(),
                          ]),
                      ),
                  ),

                S.divider(),

                S.listItem()
                  .title('Child Pages by Parent')
                  .icon(RiPagesLine)
                  .child(() =>
                    documentStore.listenQuery(allParentPageQuery).pipe(
                      map(allParentPages => {
                        // Filter array for unique values since the query will return
                        // the partents of all children so there will be duplicates
                        const parents = uniqBy(
                          allParentPages,
                          'parent._id',
                        ).map(uniqueParentPages => uniqueParentPages.parent);

                        const parentListItems = parents.map(parent =>
                          S.listItem()
                            .title(parent.content.main.title)
                            .id(parent._id)
                            .icon(RiPagesLine)
                            .child(
                              S.documentList()
                                .title(parent.content.main.title)
                                .schemaType('page')
                                .filter('content.main.parent._ref == $parentId')
                                .params({
                                  parentId: parent._id,
                                })
                                .canHandleIntent(
                                  (intent, params) =>
                                    (intent === 'create' ||
                                      intent === 'edit') &&
                                    params.type === 'page',
                                )
                                .child(
                                  S.document().views([
                                    ...Structure.getDocumentNodeViewsForSchemaType(
                                      'page',
                                    ),
                                    preview(),
                                  ]),
                                ),
                            ),
                        );

                        return S.list()
                          .title('Child Pages by Parent')
                          .items(parentListItems);
                      }),
                    ),
                  ),
              ]),
          ),

        S.divider(),

        S.listItem()
          .title('Index Pages')
          .schemaType('indexPage')
          .child(
            S.documentList()
              .title('Index Pages')
              .schemaType('indexPage')
              .filter(`_type == "indexPage" && ${allNonTranslationIds}`)
              .canHandleIntent(
                (intent, params) =>
                  (intent === 'create' || intent === 'edit') &&
                  params.type === 'indexPage',
              )
              .child(
                S.document()
                  .schemaType('indexPage')
                  .views([
                    ...Structure.getDocumentNodeViewsForSchemaType('indexPage'),
                  ]),
              ),
          ),
        S.divider(),
        S.listItem()
          .title('Newsroom')
          .icon(BsNewspaper)
          .child(
            S.list()
              .title('Page Settings')
              .items([
                S.documentListItem()
                  .title('Newsroom Settings')
                  .title('Newsroom Page')
                  .schemaType('newsroom')
                  .icon(AllIcon)
                  .id('newsRoom'),

                S.divider(),

                S.listItem()
                  .title('Press')
                  .schemaType('press')
                  .child(S.documentTypeList('press').title('Press Mentions')),
              ]),
          ),
      ]),
  );

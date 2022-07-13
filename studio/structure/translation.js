import S from '@sanity/desk-tool/structure-builder';
import documentStore from 'part:@sanity/base/datastore/document';
import { map } from 'rxjs/operators';
import { preview } from './views/preview';

const languages = [
  { name: 'en-au', title: 'English - Australia' },
  { name: 'en-nz', title: 'English - New Zealand' },
];

const availableForPreviewTypes = ['landingPage', 'model', 'episode', 'page'];

export const Translation = S.listItem()
  .title('Translation')
  .child(
    S.list()
      .title('Translations')
      .items(
        languages.map(lang =>
          S.listItem()
            .title(lang.title)
            .child(
              S.documentList()
                .title(lang.title)
                .filter(`i18n_lang == "${lang.name}"`)
                .child(id =>
                  documentStore.byId(id).pipe(
                    map(({ document }) => {
                      const views = [S.view.form()];
                      if (availableForPreviewTypes.includes(document?._type)) {
                        views.push(preview());
                      }
                      return S.document().views(views);
                    }),
                  ),
                ),
            ),
        ),
      ),
  );

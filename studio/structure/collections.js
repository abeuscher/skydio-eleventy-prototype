import { BsCollection } from 'react-icons/bs';
import S from '@sanity/desk-tool/structure-builder';

export const CollectionMenuItem = S.listItem()
  .title('Collections')
  .icon(BsCollection)
  .child(
    S.documentTypeList('collection')
      .title('Collections')
      .menuItems(S.documentTypeList('collection').getMenuItems())
      .schemaType('collection'),
  );

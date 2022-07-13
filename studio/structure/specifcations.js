import { BsCardList } from 'react-icons/bs';
import S from '@sanity/desk-tool/structure-builder';

export const SpecificationsMenu = S.listItem()
  .title('Product Specs')
  .icon(BsCardList)
  .child(
    S.documentTypeList('specification')
      .title('Product Specifications')
      .menuItems(S.documentTypeList('specification').getMenuItems())
      .schemaType('specification'),
  );

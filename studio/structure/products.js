import { RiShoppingBagLine } from 'react-icons/ri';
import S from '@sanity/desk-tool/structure-builder';
import { preview } from './views/preview';

export const ProductMenuItem = S.listItem()
  .title('Products')
  .icon(RiShoppingBagLine)
  .child(
    S.documentTypeList('product')
      .title('Products')
      .menuItems(S.documentTypeList('product').getMenuItems())
      .schemaType('product')
      .filter('_type == $type && subscription != true')
      .child(S.document().views([S.view.form(), preview()])),
  );

import { RiFileList3Line } from 'react-icons/ri';
import S from '@sanity/desk-tool/structure-builder';

export const VariantMenuItem = S.listItem()
  .title('Variants')
  .icon(RiFileList3Line)
  .child(
    S.documentTypeList('productVariant')
      .title('Variants')
      .menuItems(S.documentTypeList('productVariant').getMenuItems())
      .schemaType('productVariant'),
  );

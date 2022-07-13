import { RiFileList3Line } from 'react-icons/ri';
import S from '@sanity/desk-tool/structure-builder';

export const ProductVariantParent = S.listItem()
  .title('Product Variants')
  .icon(RiFileList3Line)
  .child(
    S.documentTypeList('product')
      .title('By Product')
      .menuItems(S.documentTypeList('product').getMenuItems())
      .filter('_type == $type && !defined(parents) && subscription != true')
      .params({ type: 'product' })
      .child(productId =>
        S.documentList()
          .title('Variants')
          .menuItems(S.documentTypeList('productVariant').getMenuItems())
          .filter('_type == $type && content.shopify.productId == $productId')
          .params({ type: 'productVariant', productId: productId }),
      ),
  );

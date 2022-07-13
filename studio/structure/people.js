import { BsPeople } from 'react-icons/bs';
import S from '@sanity/desk-tool/structure-builder';

export const PeopleMenu = S.listItem()
  .title('People')
  .icon(BsPeople)
  .child(
    S.documentTypeList('person')
      .title('People')
      .menuItems(S.documentTypeList('person').getMenuItems())
      .schemaType('person'),
  );

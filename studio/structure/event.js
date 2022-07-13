import { GoArchive as AllIcon, GoCalendar as EventIcon } from 'react-icons/go';

import S from '@sanity/desk-tool/structure-builder';
import { preview } from './views/preview';

export const EventMenu = S.listItem()
  .title('Events')
  .icon(EventIcon)
  .child(
    S.list()
      .title('Events')
      .items([
        S.listItem()
          .title('All events')
          .schemaType('event')
          .icon(AllIcon)
          .child(
            S.documentList('event')
              .title('All Events')
              .menuItems(S.documentTypeList('event').getMenuItems())
              .filter('_type == "event"')
              .child(documentId =>
                S.document()
                  .documentId(documentId)
                  .schemaType('event')
                  .views(S.view.form(), preview()),
              ),
          ),

        S.divider(),

        S.listItem()
          .title('Event Types')
          .schemaType('eventtype')
          .child(S.documentTypeList('eventtype').title('Event Types')),
        S.listItem()
          .title('Event Locations')
          .schemaType('eventlocation')
          .child(S.documentTypeList('eventlocation').title('Event Locations')),
      ]),
  );

import { BlogMenu } from './structure/blog';
import { CollectionMenuItem } from './structure/collections';
import { ConfigMenu } from './structure/config';
import { EventMenu } from './structure/event';
import { FlightSchoolMenu } from './structure/flightSchool';
import { PageMenuItem } from './structure/pages';
import { PeopleMenu } from './structure/people';
import { ProductMenuItem } from './structure/products';
import { ProductVariantParent } from './structure/productVariants';
import { ResourceMenu } from './structure/resource';
import S from '@sanity/desk-tool/structure-builder';
import { ScansMenu } from './structure/3DScans';
import { SpecificationsMenu } from './structure/specifcations';
import { Translation } from './structure/translation';
import client from 'part:@sanity/base/client';

// eslint-disable-next-line no-console
console.info(
  '%c%s',
  'color: green; font-size: 16px;',
  `Current dataset: ${client.config().dataset}`,
);

//
// === Structure ===
//
export default () =>
  S.list()
    .title('Site')
    .items([
      PageMenuItem,
      BlogMenu,
      EventMenu,
      FlightSchoolMenu,
      ScansMenu,
      PeopleMenu,
      ResourceMenu,
      SpecificationsMenu,
      S.divider(),
      ProductMenuItem,
      ProductVariantParent,
      CollectionMenuItem,
      S.divider(),
      ConfigMenu,
      Translation,
    ]);

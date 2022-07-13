/* eslint-disable sort-imports */

import {
  addLocalizationToSchemaType,
  createi18RefsObject,
} from './i18n/sanity-plugin-intl-input-graphql-helpers';
import {
  specificationGroup,
  specificationValue,
} from './objects/specificationGroup';

import announcementBanner from './documents/announcementBanner';
import blockContent from './objects/blockContent';
import blockContentModule from './modules/blockContentModule';
import blockText from './objects/blockText';
import blogCtaModule from './modules/blogCtaModule';
import button from './objects/button';
import buttonSimple from './objects/buttonSimple';
import captionCarouselModule from './modules/captionCarouselModule';
import carouselCard from './objects/carouselCard';
import category from './documents/category';
import categoryContent from './tabs/categoryContent';
import categoryMain from './tab-content/categoryMain';
import collection from './documents/collection';
import collectionContent from './tabs/collectionContent';
import collectionMain from './tab-content/collectionMain';
import collectionShopify from './tab-content/collectionShopify';
import comparisonCaptions from './objects/comparisonCaptions';
import contentGridModule from './modules/contentGridModule';
import createSchema from 'part:@sanity/base/schema-creator';
import ctaLargeModule from './modules/ctaLargeModule';
import ctaModule from './modules/ctaModule';
import disclaimerModule from './modules/disclaimerModule';
import episode from './documents/episode';
import episodeContent from './tabs/episodeContent';
import episodeMain from './tab-content/episodeMain';
import event from './documents/event';
import eventContent from './tabs/eventContent';
import eventMain from './tab-content/eventMain';
import eventlocation from './documents/eventLocation';
import eventtype from './documents/eventType';
import externalLink from './objects/externalLink';
import featureCard from './objects/featureCard';
import figure from './objects/figure';
import flexibleContentCard from './objects/flexibleContentCard';
import flexibleContentGridModule from './modules/flexibleContentGridModule';
import globalContent from './tabs/globalContent';
import gridColumn from './objects/gridColumn';
import hero2UpBlock from './objects/hero2UpBlock';
import hero2UpModule from './modules/hero2UpModule';
import heroProductModule from './objects/heroProductModule';
import heroWithRibbonBlock from './objects/heroWithRibbonBlock';
import heroWithRibbonModule from './modules/heroWithRibbonModule';
import imageGalleryModule from './modules/imageGalleryModule';
import indexPage from './documents/indexPage';
import indexPageContent from './tabs/indexPageContent';
import indexPageMain from './tab-content/indexPageMain';
import indexPageMetaCard from './tab-content/indexPageMetaCard';
import { instagram } from './objects/embeds';
import internalLink from './objects/internalLink';
import keyframeVideoCarouselModule from './modules/keyframeVideoCarouselModule';
import landingPage from './documents/landingPage';
import landingPageContent from './tabs/landingPageContent';
import landingPageMain from './tab-content/landingPageMain';
import landingPageModules from './module-arrays/landingPageModules';
import largeMediaModule from './modules/largeMediaModule';
import link from './objects/link';
import logoBannerModule from './modules/logoBannerModule';
import metaCard from './tab-content/metaCard';
import model from './documents/model';
import modelCollection from './documents/modelCollection';
import modelContent from './tabs/modelContent';
import modelMain from './tab-content/modelMain';
import multiVideoModule from './modules/multiVideoModule';
import navGroup from './objects/navGroup';
import navLink from './objects/navLink';
import navigation from './documents/navigation';
import newSpecsModule from './modules/newSpecsModule';
import newsroom from './documents/newsroom';
import newsroomContent from './tabs/newsroomContent';
import newsroomMain from './tab-content/newsroomMain';
import obstacleAvoidanceModule from './modules/obstacleAvoidanceModule';
import optionalMedia from './objects/optionalMedia';
import page from './documents/page';
import pageContent from './tabs/pageContent';
import pageMain from './tab-content/pageMain';
import pageModules from './module-arrays/pageModules';
import peopleGridModule from './modules/peopleGridModule';
import person from './documents/person';
import post from './documents/post';
import postContent from './tabs/postContent';
import postMain from './tab-content/postMain';
import postModules from './module-arrays/postModules';
import press from './documents/press';
import pressModule from './modules/pressModule';
import product from './documents/product';
import productContent from './tabs/productContent';
import productFeatureItem from './objects/productFeatureItem';
import productFeatureModule from './modules/productFeatureModule';
import productImage from './objects/productImage';
import productMain from './tab-content/productMain';
import productModules from './module-arrays/productModules';
import productOptions from './objects/productOptions';
import productReference from './objects/productReference';
import productShopify from './tab-content/productShopify';
import pullQuote from './objects/pullQuote';
import rangeEnvironment from './objects/rangeEnvironment';
import rangeModule from './modules/rangeModule';
import rangeSlide from './objects/rangeSlide';
import rangeSlideBar from './objects/rangeSlideBar';
import rangeSlideBarSet from './objects/rangeSlideBarSet';
import redirect from './objects/redirect';
import redirects from './documents/redirects';
import resource from './documents/resource';
import resourceContent from './tabs/resourceContent';
import resourceTileMain from './tab-content/resourceTileMain';
import resourceType from './documents/resourceType';
import richTextModule from './modules/richTextModule';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import sectionHeader from './objects/sectionHeader';
import series from './documents/series';
import simpleHeroModule from './modules/simpleHeroModule';
import singleStat from './objects/singleStat';
import siteConfig from './documents/siteConfig';
import siteGlobal from './documents/siteGlobal';
import sketchfabModule from './modules/sketchfabModule';
import skydioCareModule from './modules/skydioCareModule';
import skydioPlusPhotoModule from './modules/skydioPlusPhotoModule';
import social from './tab-content/social';
import specification from './documents/specification';
import specsModule from './modules/specsModule';
import statsAndVideoModule from './modules/statsAndVideoModule';
import submenu from './objects/submenu';
import tableCell from './objects/tableCell';
import tableModule from './modules/tableModule';
import tableRow from './documents/tableRow';
import variant from './documents/variant';
import variantContent from './tabs/variantContent';
import variantMain from './tab-content/variantMain';
import variantOptions from './objects/variantOptions';
import variantShopify from './tab-content/variantShopify';
import video from './objects/video';
import videoGalleryModule from './modules/videoGalleryModule';
import videoGroup from './objects/videoGroup';
import videoSlide from './objects/videoSlide';
import videoWithButton from './objects/videoWithButton';
import youtube from './objects/youtube';

const customSchemaTypes = [
  // Documents
  announcementBanner,
  category,
  collection,
  landingPage,
  indexPage,
  navigation,
  page,
  person,
  post,
  episode,
  event,
  eventtype,
  eventlocation,
  model,
  modelCollection,
  newsroom,
  press,
  product,
  redirects,
  resource,
  resourceType,
  series,
  siteConfig,
  siteGlobal,
  specification,
  tableRow,
  variant,

  // Tabs
  categoryContent,
  collectionContent,
  episodeContent,
  eventContent,
  globalContent,
  landingPageContent,
  indexPageContent,
  modelContent,
  newsroomContent,
  pageContent,
  postContent,
  productContent,
  resourceContent,
  variantContent,

  // Tab content
  categoryMain,
  collectionMain,
  collectionShopify,
  episodeMain,
  eventMain,
  landingPageMain,
  indexPageMain,
  indexPageMetaCard,
  metaCard,
  modelMain,
  newsroomMain,
  pageMain,
  postMain,
  productMain,
  productShopify,
  resourceTileMain,
  social,
  variantMain,
  variantShopify,

  // Module Arrays
  landingPageModules,
  pageModules,
  postModules,
  productModules,

  // Modules
  captionCarouselModule,
  blockContentModule,
  blogCtaModule,
  contentGridModule,
  ctaLargeModule,
  ctaModule,
  disclaimerModule,
  flexibleContentGridModule,
  hero2UpModule,
  heroWithRibbonModule,
  heroProductModule,
  imageGalleryModule,
  keyframeVideoCarouselModule,
  largeMediaModule,
  logoBannerModule,
  multiVideoModule,
  newSpecsModule,
  obstacleAvoidanceModule,
  peopleGridModule,
  pressModule,
  productFeatureModule,
  rangeModule,
  richTextModule,
  simpleHeroModule,
  sketchfabModule,
  skydioCareModule,
  skydioPlusPhotoModule,
  statsAndVideoModule,
  specsModule,
  tableModule,
  videoGalleryModule,

  // TODO: move other modules into this area

  // Objects
  button,
  buttonSimple,
  carouselCard,
  comparisonCaptions,
  externalLink,
  featureCard,
  flexibleContentCard,
  figure,
  gridColumn,
  hero2UpBlock,
  heroWithRibbonBlock,
  instagram,
  internalLink,
  link,
  navGroup,
  navLink,
  optionalMedia,
  productFeatureItem,
  productImage,
  productOptions,
  productReference,
  pullQuote,
  rangeEnvironment,
  rangeSlide,
  rangeSlideBar,
  rangeSlideBarSet,
  redirect,
  sectionHeader,
  singleStat,
  specificationGroup,
  specificationValue,
  submenu,
  tableCell,
  variantOptions,
  video,
  videoGroup,
  videoSlide,
  videoWithButton,
  youtube,

  // Block types at the end, so that they can access
  // objects above, like internalLink and button diff
  blockContent,
  blockText,
];

const i18n_refs_object = createi18RefsObject(customSchemaTypes);

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat(
    [...customSchemaTypes, i18n_refs_object].map(schema =>
      addLocalizationToSchemaType(schema),
    ),
  ),
});

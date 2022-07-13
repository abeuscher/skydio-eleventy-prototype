import EyeIcon from 'part:@sanity/base/eye-icon';
import IframePreview from '../previews/IframePreview.js';
import S from '@sanity/desk-tool/structure-builder';

const remoteURL = process.env.SANITY_STUDIO_SITE_URL
  ? `${process.env.SANITY_STUDIO_SITE_URL}/previews`
  : null;
const localURL = 'http://localhost:8000/previews';
const previewURL =
  window.location.hostname === 'localhost' ? localURL : remoteURL;

export const preview = () => {
  return S.view
    .component(IframePreview)
    .options({ previewURL })
    .icon(EyeIcon)
    .title('Preview');
};

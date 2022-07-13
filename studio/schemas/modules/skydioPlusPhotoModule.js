export default {
  name: 'skydioPlusPhotoModule',
  title: 'Skydio Plus Photo Module',
  type: 'object',
  fields: [
    {
      name: 'topLeftImage',
      title: 'Top Left Image',
      type: 'image',
    },
    {
      name: 'topRightImage',
      title: 'Top Right Image',
      type: 'image',
    },
    {
      name: 'topImageMobile',
      title: 'Top Image Mobile',
      type: 'image',
    },
    {
      name: 'sectionTitleCrossed',
      title: 'Section Title Crossed Out',
      type: 'string',
    },
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'text',
      rows: 2,
    },
    {
      name: 'sectionTopBody',
      title: 'Section Top Body',
      type: 'blockContent',
    },
    {
      name: 'sectionTopButtons',
      title: 'Section Top Buttons',
      type: 'array',
      of: [{ type: 'button' }],
    },
    {
      name: 'topStats',
      title: 'Top Stats',
      type: 'array',
      of: [{ type: 'singleStat' }],
    },
    {
      name: 'imageOverlayLeft',
      title: 'Image Overlay Left',
      type: 'image',
    },
    {
      name: 'imageOverlayRight',
      title: 'Image Overlay Right',
      type: 'image',
    },
    {
      name: 'imageOverlayText',
      title: 'Image Overlay Text',
      type: 'text',
      rows: 4,
    },
    {
      name: 'middlLeftImage',
      title: 'Middle Left Image',
      type: 'image',
    },
    {
      name: 'middleLeftText',
      title: 'Middle Left Text',
      type: 'text',
      rows: 4,
    },
    {
      name: 'middleRightImage',
      title: 'Middle Right Image',
      type: 'image',
    },
    {
      name: 'middleRightText',
      title: 'Middle Roight Text',
      type: 'text',
      rows: 4,
    },
    {
      name: 'cameraImage',
      title: 'Camera Image',
      type: 'image',
    },
    {
      name: 'cameraText',
      title: 'Cmera Text',
      type: 'text',
      rows: 4,
    },
    {
      name: 'cameraButton',
      title: 'Camera Button',
      type: 'button',
    },
    {
      name: 'bottomLeftImage',
      title: 'Bottom Left Image',
      type: 'image',
    },
    {
      name: 'bottomLeftText',
      title: 'Bottom Left Text',
      type: 'text',
      rows: 4,
    },
    {
      name: 'bottomRightImage',
      title: 'Bottom Right Image',
      type: 'image',
    },
    {
      name: 'bottomRightText',
      title: 'Bottom Right Text',
      type: 'text',
      rows: 4,
    },
  ],
  preview: {
    select: {
      title: 'sectionHeader.heading',
    },
    prepare: ({ title }) => {
      return {
        title: 'Skydio Plus Photo Module',
        subtitle: title,
      };
    },
  },
};

import PropTypes from 'prop-types';
import React from 'react';

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

const Hero = ({ children }) => <h1 style={{ fontSize: '3rem' }}>{children}</h1>;
Hero.propTypes = {
  children: PropTypes.object,
};
export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      type: 'block',
      title: 'Block',
      // Styles let you set what your user can mark up blocks with. These
      // corresponds with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Normal Centered', value: 'normalC' },
        { title: 'Normal Right', value: 'normalR' },
        { title: 'Hero', value: 'hero', blockEditor: { render: Hero } },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Subtitle', value: 'subtitle' },
        { title: 'Body Large', value: 'bodyLarge' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Number', value: 'number' },
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            name: 'internalLink',
            title: 'Link to internal page',
            type: 'internalLink',
          },
          {
            name: 'externalLink',
            title: 'Link to external page',
            type: 'externalLink',
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: 'figure',
      description: 'For optimal display, a 2x image is recommended',
    },
    { type: 'button' },
    { type: 'pullQuote' },
    { type: 'video' },
    { type: 'youtube' },
  ],
};

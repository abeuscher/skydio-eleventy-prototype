import { FiExternalLink } from 'react-icons/fi';
import PropTypes from 'prop-types';
import React from 'react';

const BlockEditor = ({ children }) => (
  <span>
    {children}
    <FiExternalLink style={{ display: 'inline' }} />
  </span>
);
BlockEditor.propTypes = {
  children: PropTypes.object,
};
export default {
  title: 'External Link',
  name: 'externalLink',
  type: 'object',
  icon: FiExternalLink,
  blockEditor: {
    icon: FiExternalLink,
    render: BlockEditor,
  },
  fields: [
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: Rule =>
        Rule.uri({ scheme: ['tel', 'mailto', 'http', 'https'] }).warning(
          `Please use a fully formatted URL. If this is a relative link, use an internal link.`,
        ),
    },
    {
      name: 'blank',
      title: 'Open in new tab',
      type: 'boolean',
    },
  ],
};

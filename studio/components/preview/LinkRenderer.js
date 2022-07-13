import { FaExternalLinkAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import React from 'react';

const LinkRenderer = props => (
  <span>
    {props.children} <FaExternalLinkAlt />
  </span>
);

LinkRenderer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LinkRenderer;

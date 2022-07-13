import InstagramEmbed from 'react-instagram-embed';
import PropTypes from 'prop-types';
import React from 'react';

const InstagramPreview = ({ value }) => {
  if (!value.url) {
    return null;
  }
  return <InstagramEmbed url={value.url} />;
};

InstagramPreview.propTypes = {
  value: PropTypes.object,
};

export default InstagramPreview;

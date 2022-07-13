import PropTypes from 'prop-types';
import React from 'react';

const InternalLinkPreview = ({ value }) => {
  return (
    <>
      {value.title}
      <div>
        <small>{value._type}</small>
      </div>
    </>
  );
};

InternalLinkPreview.propTypes = {
  value: PropTypes.object,
};

export default InternalLinkPreview;

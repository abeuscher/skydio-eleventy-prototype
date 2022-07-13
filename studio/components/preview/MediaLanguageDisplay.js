import { Badge } from '@sanity/ui';
import PropTypes from 'prop-types';
import React from 'react';

const MediaLanguageDisplay = ({ language, Media }) =>
  language ? (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '2px',
      }}
    >
      <Media />
      <Badge
        style={{ width: '3.5rem', textAlign: 'center', marginTop: '2px' }}
        tone="positive"
        fontSize="0"
      >
        {language}
      </Badge>
    </div>
  ) : (
    <Media />
  );

MediaLanguageDisplay.propTypes = {
  language: PropTypes.string,
  Media: PropTypes.component,
};

export default MediaLanguageDisplay;

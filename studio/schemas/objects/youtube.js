import { ImFileVideo } from 'react-icons/im';
import PropTypes from 'prop-types';
import React from 'react';
import YouTube from 'react-youtube';
import getYouTubeId from 'get-youtube-id';

const Preview = ({ value }) => {
  return <YouTube videoId={getYouTubeId(value.url)} />;
};
Preview.propTypes = {
  value: PropTypes.object,
};
export default {
  title: 'YouTube Embed',
  name: 'youtube',
  type: 'object',
  icon: ImFileVideo,
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'YouTube video URL',
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
    component: Preview,
  },
};

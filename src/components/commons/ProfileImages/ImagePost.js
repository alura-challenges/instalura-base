import React from 'react';
import PropTypes from 'prop-types';

export function ImagePost({ image }) {
  return (
    <img
      src={image.photoUrl}
      alt={image.alt}
      width="100%"
      height="100%"
      loading="lazy"
    />
  );
}

ImagePost.propTypes = PropTypes.shape({
  _id: PropTypes.string,
  description: PropTypes.string,
  photoUrl: PropTypes.string,
  filter: PropTypes.string,
  user: PropTypes.string,
}).isRequired;

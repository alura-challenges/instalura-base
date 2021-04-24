import React from 'react';
import PropTypes from 'prop-types';

export function ProfileImages({ images }) {
  return (
    <div>
      {images.map((image) => (
        <img
          // eslint-disable-next-line no-underscore-dangle
          key={image._id}
          src={image.photoUrl}
          alt={image.alt}
        />
      ))}
    </div>
  );
}

ProfileImages.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      description: PropTypes.string,
      photoUrl: PropTypes.string,
      filter: PropTypes.string,
      user: PropTypes.string,
      likes: [],
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
    }),
  ).isRequired,
};

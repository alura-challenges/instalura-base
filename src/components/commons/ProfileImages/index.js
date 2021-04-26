import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '../../foundation/layout/Grid';

export function ProfileImages({ images }) {
  return (
    <div>
      <Grid.Container
        marginTop={{
          xs: '32px',
          md: '75px',
        }}
        paddingLeft={{
          xs: '16px',
        }}
        paddingRight={{
          xs: '16px',
        }}
      >
        <Grid.Row
          flex="1"
          alignItems="center"
          justifyContent="center"
        >
          {images.map((image) => (
            <Grid.Col
              // eslint-disable-next-line no-underscore-dangle
              key={image._id}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              flex={1}
              value={4}
              alignItems="flex-start"
              paddingBottom="16px"
              paddingLeft={{
                xs: '4px',
                md: '16px',
              }}
              paddingRight={{
                xs: '4px',
                md: '16px',
              }}
            >
              <img
                src={image.photoUrl}
                alt={image.alt}
                width="100%"
                height="100%"
                loading="lazy"
              />
            </Grid.Col>
          ))}
        </Grid.Row>
      </Grid.Container>

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

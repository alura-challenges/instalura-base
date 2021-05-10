/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '../../foundation/layout/Grid';
import { Box } from '../../foundation/layout/Box';
import { ImagePost } from './ImagePost';
import { userService } from '../../../services/user/userService';
import { authService } from '../../../services/auth/authService';
import { useOnScreen } from '../../../infra/hooks/screen/useOnScreen';

export function ProfileImages({ images }) {
  const [user, setUser] = React.useState(false);

  React.useEffect(() => {
    authService().getSession().then((session) => {
      setUser(session);
    });
  }, []);

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
              <ProfilePostsImages image={image} user={user} />
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

function ProfilePostsImages({ image, user }) {
  const [isHovering, setIsHovering] = React.useState(false);
  const [likes, setLikes] = React.useState(image.likes.length);
  const [liked, setLiked] = React.useState(false);
  const [visibleOnce, setVisibleOnce] = React.useState(false);

  const [setRef, visible] = useOnScreen({ rootMargin: globalThis.innerHeight / 2 });

  async function handleClickLike() {
    userService.likeImage(image._id).then(({ data, error }) => {
      // api volta nada quando da o deslike!!!
      if (error) {
        setLiked(false);
        setLikes(likes - 1);
      } else {
        setLiked(true);
        setLikes(data.likes?.length);
      }
    });
  }

  React.useEffect(() => {
    setVisibleOnce(visibleOnce || visible);
  }, [visible]);

  React.useEffect(() => {
    const wasLiked = image.likes?.filter((l) => l.user === user.id).length > 0;
    setLiked(wasLiked);
  }, [user]);

  return (
    <Box
      className={image.filter}
      width="100%"
      height="100%"
      position="relative"
      alignItems="center"
      placeContent="center"
      display="flex"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      filter={isHovering ? 'brightness(0.7)' : ''}
      onClick={handleClickLike}
      ref={setRef}
    >
      {isHovering && (
        <Box
          color={liked ? 'red' : 'white'}
          fontSize="75px"
          textAlign="center"
          position="absolute"
        >
          ♡
          <Box
            fontSize="30px"
          >
            {likes}
          </Box>
        </Box>
      )}
      {visibleOnce && <ImagePost image={image} />}
    </Box>
  );
}

ProfilePostsImages.propTypes = PropTypes.shape({
  _id: PropTypes.string,
  description: PropTypes.string,
  photoUrl: PropTypes.string,
  filter: PropTypes.string,
  user: PropTypes.string,
  likes: [],
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
}).isRequired;

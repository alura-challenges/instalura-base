import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';
import { ProfileImages } from '../../src/components/commons/ProfileImages';
import { ProfileInfo } from '../../src/components/commons/ProfileInfo';
import { Box } from '../../src/components/foundation/layout/Box';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';
import { authService } from '../../src/services/auth/authService';
import { userService } from '../../src/services/user/userService';

function ProfilePage({ posts }) {
  // eslint-disable-next-line no-console
  // console.log(JSON.stringify(posts, null, 2));

  return (
    <>
      <Head>
        <link href="/instagram.min.css" rel="stylesheet" />
        <link href="/carousel.css" rel="stylesheet" />
      </Head>
      <Box
        backgroundColor="#F2F2F2"
        height="100%"
        width="100%"
      >
        <ProfileInfo />
        <ProfileImages images={posts} />
      </Box>
    </>
  );
}

ProfilePage.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      description: PropTypes.string,
      photoUrl: PropTypes.string,
      filter: PropTypes.string,
      user: PropTypes.string,
      likes: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string,
          user: PropTypes.string,
        }),
      ),
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
    }),
  ).isRequired,
};

export default websitePageHOC(ProfilePage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Profile',
    },
    menuProps: {
      display: true,
      logged: true,
    },
    pageBoxProps: {
      backgroundImage: 'url(/images/bubbles.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
    },
  },
});

export async function getServerSideProps(ctx) {
  const auth = authService(ctx);
  const hasActiveSession = await auth.hasActiveSession();

  if (hasActiveSession) {
    const session = await auth.getSession();
    const profilePage = await userService.getProfilePage(ctx);
    return {
      props: {
        user: {
          ...session,
          ...profilePage.user,
        },
        posts: profilePage.posts,
      },
    };
  }

  ctx.res.writeHead(307, { location: '/login' });
  ctx.res.end();

  return {
    props: {},
  };
}

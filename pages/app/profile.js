import React from 'react';
import { authService } from '../../src/services/auth/authService';
import { userService } from '../../src/services/user/userService';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';
import { Box } from '../../src/components/foundation/layout/Box';
import { ProfileInfo } from '../../src/components/commons/ProfileInfo';

function ProfilePage(props) {
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(props, null, 2));

  return (
    <Box
      backgroundColor="#F2F2F2"
      height="100%"
      width="100%"
    >
      <ProfileInfo />
    </Box>
  );
}

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

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Logo } from '../../../theme/Logo';
import Text from '../../foundation/Text';
import { Button } from '../Button';
import { MenuWrapper } from './styles/MenuWrapper';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { AddImageModal } from '../ProfileImages/AddImageModal';

const links = [
  {
    texto: 'Home',
    url: '/',
  },
  {
    texto: 'Perguntas frequentes',
    url: '/faq',
  },
  {
    texto: 'Sobre',
    url: '/sobre',
  },
];

export default function Menu({ onCadastrarClick, logged = false }) {
  return (
    <MenuWrapper logged={logged}>
      <MenuWrapper.LeftSide logged={logged}>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide logged={logged}>
        {!logged && links.map((link) => (
          <li key={link.url}>
            <Text variant="smallestException" tag="a" href={link.url}>
              {link.texto}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide logged={logged}>
        {!logged && (
          <>
            <Button ghost variant="secondary.main" href="/app/login">
              Entrar
            </Button>
            <Button variant="primary.main" onClick={onCadastrarClick}>
              Cadastrar
            </Button>
          </>
        )}
        {logged && (
          <LoggedMenu>
            <LoggedMenu.Item mobileOrder={2}>
              <AddImageModal />
            </LoggedMenu.Item>
            <LoggedMenu.Item mobileOrder={1}>
              <HomeButton />
            </LoggedMenu.Item>
            <LoggedMenu.Item mobileOrder={3}>
              <Avatar />
            </LoggedMenu.Item>
          </LoggedMenu>
        )}
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

Menu.propTypes = {
  onCadastrarClick: PropTypes.func.isRequired,
  logged: PropTypes.bool,
};

Menu.defaultProps = {
  logged: false,
};

const LoggedMenu = styled.div`
  display: flex;
  padding-left: 12px;
  padding-right: 12px;
  align-items: center;

  ${breakpointsMedia({
    xs: css`
        justify-content: space-between;
        width: 90%;
      `,
    md: css`
        justify-content: unset;
        width: unset;
      `,
  })}
`;

LoggedMenu.Item = styled.div`
  margin: 5px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${breakpointsMedia({
    xs: css`
      order: ${({ mobileOrder }) => mobileOrder}
    `,
    md: css`
      order: initial;
      margin: 16px;
    `,
  })}
`;

const HomeButton = () => (
  <svg width="32px" heigth="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2h14.22A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44zM10 20v-6h4v6zm9 0h-3v-7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H5v-8.42l7-7.15 7 7.19z" fill="#070C0E" />
  </svg>
);

export const Avatar = styled.div`
  background: url(https://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 100%;
  width: 100%;
  height: 100%;
`;

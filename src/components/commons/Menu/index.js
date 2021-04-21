import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../../../theme/Logo';
import Text from '../../foundation/Text';
import { Button } from '../Button';
import { MenuWrapper } from './styles/MenuWrapper';

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
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {!logged && links.map((link) => (
          <li key={link.url}>
            <Text variant="smallestException" tag="a" href={link.url}>
              {link.texto}
            </Text>
          </li>
        ))}
        {logged && (
          <div>Logado!</div>
        )}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
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
          <div>Logado!</div>
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

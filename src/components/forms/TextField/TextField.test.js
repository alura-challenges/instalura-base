import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from '../../../infra/test/testUtils';

import TextField from './index';

describe('<TextField />', () => {
  test('renders component', () => {
    render(
      <TextField
        placeholder="Nome"
        value="Ju"
        onChange={() => {}}
        name="nome"
      />
      ,
    );
    // screen.debug();
    const textField = screen.getByPlaceholderText(/nome/i);
    expect(textField).toMatchSnapshot();
  });

  describe('when field is valid', () => {
    describe('and user is typing', () => {
      test('the value must be updated', () => {
        const onChangeMock = jest.fn();
        render(
          <TextField
            placeholder="Nome"
            value=""
            onChange={onChangeMock}
            name="nome"
            isTouched
          />
          ,
        );

        const inputNome = screen.getByPlaceholderText(/nome/i);
        user.type(inputNome, 'devsoutinho@gmail.com');
        expect(onChangeMock).toHaveBeenCalledTimes(21);
      });
    });
  });

  describe('when field is invalid', () => {
    test('displays the respective error message', () => {
      render(
        <TextField
          placeholder="Email"
          value="devsoutinhogmail.com"
          onChange={() => {}}
          name="email"
          isTouched
          error="O campo email é obrigatório"
        />
        ,
      );

      const inputEmail = screen.getByPlaceholderText(/email/i);
      expect(inputEmail).toHaveValue('devsoutinhogmail.com');
      expect(screen.getByRole('alert')).toHaveTextContent('O campo email é obrigatório');
      expect(inputEmail).toMatchSnapshot();
    });
  });
});

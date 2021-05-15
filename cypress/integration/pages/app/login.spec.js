/// <reference types="cypress" />

import LoginScreenPageObject from '../../../../src/components/screens/app/LoginScreen/LoginScreen.pageObject';

const BASE_URL = 'https://instalura-api.vercel.app';

describe('/pages/app/login/', () => {
  describe('when fill and submit a form login request', () => {
    it('go to the profile page', () => {
      // Pré Teste
      cy.intercept(`${BASE_URL}/api/login`)
        .as('userLogin');

      // Cenário
      const loginScreen = new LoginScreenPageObject(cy);
      loginScreen
        .fillLoginForm({ user: 'omariosouto', password: 'senhasegura' })
        .submitLoginForm();

      // Asserções
      cy.wait('@userLogin')
        .then((intercept) => {
          const { token } = intercept.response.body.data;
          cy.getCookie('LOGIN_COOKIE_APP_TOKEN')
            .should('exist')
            .should('have.property', 'value', token);
        });

      // Mudando ordem para cold start não falhar
      cy.url().should('include', '/app/profile');
    });
  });
});

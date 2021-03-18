export default class LoginScreenPageObject {
  constructor(cy) {
    this.cy = cy;

    this.cy.visit('/app/login');
  }

  fillLoginForm({ user, password }) {
    this.cy.get('#formCadastro input[name="usuario"]').type(user);
    this.cy.get('#formCadastro input[name="senha"]').type(password);

    return this;
  }

  submitLoginForm() {
    this.cy.get('#formCadastro button[type="submit"]').click();

    return this;
  }
}

/* eslint-disable no-use-before-define */
// eslint-disable-next-line no-unused-vars
const BASE_URL = 'https://instalura-api.vercel.app';

describe('app/profile/', () => {
  describe('adding a new image', () => {
    it('add a image', () => {
      setupEEntarProfile();

      abrirModal();

      adicionarImagem();

      avancarEPostar();

      verificarPostFuncionou();

      fecharModal();
    });
  });
});

function adicionarImagem() {
  const imgURL = getNicRandomImage();

  inserirImagem(imgURL);

  imagemDeveEstarVisivel(imgURL);
}

function setupEEntarProfile() {
  cy.login();
  cy.visit('/app/profile');
}

function modalNaoDeveSerVisivel() {
  cy.get('div[name="modalAddImage"] > div').should('not.be.visible');
}

function modalDeveSerVisivel() {
  cy.get('div[name="modalAddImage"] > div').should('be.visible');
}

function fecharModal() {
  cy.contains('Fechar').click();
  modalNaoDeveSerVisivel();
}

function verificarPostFuncionou() {
  cy.get('div[name="postReturn"]').should('contain.text', 'Post enviado!');
}

function avancarEPostar() {
  cy.contains('Avançar').click();

  cy.get('.CarouselContainer').should('contain.text', 'Normal');

  cy.contains('Postar').click();
}

function imagemDeveEstarVisivel(imgURL) {
  cy.intercept(imgURL).as('image');
  cy.wait('@image');
  cy.get('img[alt="Sua Imagem"]').should('be.visible');
}

function inserirImagem(imgURL) {
  cy.get('input[placeholder="URL da imagem"]').type(imgURL);
}

function abrirModal() {
  cy.get('button[name="addImage"]').click();
  modalDeveSerVisivel();
}

function getNicRandomImage() {
  const randomW = getRandomNumber(300, 600);
  const randomH = getRandomNumber(300, 600);
  const type = () => {
    const r = getRandomNumber(0, 3);
    const types = {
      0: '',
      1: '/g',
      2: '/c',
      3: '/gif',
    };
    return types[r];
  };
  return `https://www.placecage.com${type()}/${randomW}/${randomH}`;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// eslint-disable-next-line no-unused-vars
const BASE_URL = 'https://instalura-api.vercel.app';

describe('app/profile/', () => {
  describe('adding a new image', () => {
    it('add a image', () => {
      cy.login();
      cy.visit('/app/profile');
    });
    // const api = '/api/posts';
    // const img = 'https://github.com/JulianaAmoasei.png';
    // const coisa = {
    //   description: 'new image',
    //   filter: 'filter-ashby',
    //   photoUrl: 'https://github.com/JulianaAmoasei.png',
    // };
    // const resposta = {
    //   data: {
    //     _id: '609ff43cbbbe7400089f50a7',
    //     photoUrl: 'https://github.com/JulianaAmoasei.png',
    //     filter: 'filter-ashby',
    //     description: 'new image',
    //     user: '5fe9035f5bb019a3c62572da',
    //     likes: [],
    //     createdAt: '2021-05-15T16:18:04.226Z',
    //     updatedAt: '2021-05-15T16:18:04.226Z',
    //     __v: 0,
    //   },
    // };
  });
});

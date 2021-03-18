async function HttpClient(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  })
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }

      throw new Error('Falha em pegar os dados do servidor :(');
    });
}

export const loginService = {
  async login({ username, password }) {
    return HttpClient('https://instalura-api.omariosouto.vercel.app/api/login', {
      method: 'POST',
      body: {
        username, // 'omariosouto'
        password, // 'senhasegura'
      },
    })
      .then((respostaConvertida) => {
        // Salvar o Token
        // Escrever os testes
        console.log(respostaConvertida);
        return respostaConvertida;
      });
  },
};

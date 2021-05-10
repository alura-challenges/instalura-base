import { HttpClient } from '../../infra/http/HttpClient';
import { authService } from '../auth/authService';

const BASE_URL = 'https://instalura-api.vercel.app';

export const userService = {
  async getProfilePage(ctx) {
    const { data } = await this.authorizationFetch(ctx, '/api/users/posts', 'Não conseguimos pegar os posts');
    return {
      user: {
        totalLikes: 100,
      },
      posts: data,
    };
  },
  async postImage(imageDTO) {
    return this.authorizationFetch(null, '/api/posts', 'Não foi possivel postar.', 'POST', imageDTO);
  },
  async likeImage(imgId) {
    return this.authorizationFetch(null, `/api/posts/${imgId}/like`, 'Problema ao dar like.', 'POST', {});
  },
  async authorizationFetch(ctx, api, errorMsg, method = 'GET', body = null) {
    const url = `${BASE_URL}${api}`;
    const options = {
      GET: null,
      POST: {
        method,
        body,
      },
    };

    try {
      const token = await authService(ctx).getToken();

      return await HttpClient(url, {
        headers: {
          authorization: `Bearer ${token}`,
        },
        ...options[method],
      });
    } catch (err) {
      return { error: errorMsg };
    }
  },
};

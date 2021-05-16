import React from 'react';
import { ImagePost } from './ImagePost';
import {
  render,
  act,
  screen,
} from '../../../infra/test/testUtils';

describe('ImagePost', () => {
  it('should renders', async () => {
    const image = {
      photoUrl: '/bubbles.svg',
      alt: 'bubbles',
    };

    await act(async () => render(
      <ImagePost image={image} />,
    ));

    expect(screen.getByAltText(image.alt)).toHaveAttribute('src', image.photoUrl);
  });
});

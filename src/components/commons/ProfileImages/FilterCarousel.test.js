import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { FilterCarousel, filters, getImagesWithFilters } from './FilterCarousel';

describe('FilterCarousel', () => {
  const filterQuantityWithNormalFilter = Object.keys(filters).length + 1;
  describe('getImagesWithFilters', () => {
    const imageWithFilters = getImagesWithFilters('anyURL');
    it('should give all filters plus normal with URL and filter', () => {
      expect(imageWithFilters.length).toBe(filterQuantityWithNormalFilter);
    });

    it('should have normal as the first filter', () => {
      expect(imageWithFilters[0]).toEqual({ headline: 'Normal', url: 'anyURL', filter: null });
    });

    it('should have the Brannan filter', () => {
      expect(imageWithFilters.find((f) => f.headline === 'Brannan').filter).toBe('filter-brannan');
    });
  });

  describe('FilterCarousel', () => {
    const changeFilter = jest.fn();
    const { container } = render(<FilterCarousel url="anyURL" changeFilter={changeFilter} />);
    const allImageFilters = container.querySelectorAll('[class="CarouselImageLabel"]');
    const nextArrowButton = container.querySelector('[class="CarouselArrow ArrowNext"]');
    const backArrowButton = container.querySelector('[class="CarouselArrow ArrowBack"]');
    fireEvent.click(nextArrowButton);
    fireEvent.click(backArrowButton);

    it('should render all the filters', () => {
      expect(allImageFilters.length).toBe(filterQuantityWithNormalFilter);
    });

    it('should callback with filter 1977 after clicking next once', () => {
      expect(changeFilter).toHaveBeenNthCalledWith(1, filters[1977]);
    });

    it('should callback with filter normal after clicking next once then back again', () => {
      expect(changeFilter).toHaveBeenNthCalledWith(2, null);
    });
  });
});

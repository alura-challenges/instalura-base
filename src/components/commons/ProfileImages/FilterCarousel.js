import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from '../../3rdParty/Carousel';

export const filters = {
  1977: 'filter-1977',
  Aden: 'filter-aden',
  Amaro: 'filter-amaro',
  Ashby: 'filter-ashby',
  Brannan: 'filter-brannan',
  Brooklyn: 'filter-brooklyn',
  Charmes: 'filter-charmes',
  Clarendon: 'filter-clarendon',
  Crema: 'filter-crema',
  Dogpatch: 'filter-dogpatch',
  Earlybird: 'filter-earlybird',
  Gingham: 'filter-gingham',
  Ginza: 'filter-ginza',
  Hefe: 'filter-hefe',
  Helena: 'filter-helena',
  Hudson: 'filter-hudson',
  Inkwell: 'filter-inkwell',
  Kelvin: 'filter-kelvin',
  Kuno: 'filter-juno',
  Lark: 'filter-lark',
  'Lo-Fi': 'filter-lofi',
  Ludwig: 'filter-ludwig',
  Maven: 'filter-maven',
  Mayfair: 'filter-mayfair',
  Moon: 'filter-moon',
  Nashville: 'filter-nashville',
  Perpetua: 'filter-perpetua',
  Poprocket: 'filter-poprocket',
  Reyes: 'filter-reyes',
  Rise: 'filter-rise',
  Sierra: 'filter-sierra',
  Skyline: 'filter-skyline',
  Slumber: 'filter-slumber',
  Stinson: 'filter-stinson',
  Sutro: 'filter-sutro',
  Toaster: 'filter-toaster',
  Valencia: 'filter-valencia',
  Vesper: 'filter-vesper',
  Walden: 'filter-walden',
  Willow: 'filter-willow',
  'X-Pro II': 'filter-xpro-ii',
};
export const getImagesWithFilters = (url) => {
  // eslint-disable-next-line arrow-body-style
  const allFilters = Object.keys(filters).map((filter) => {
    return {
      headline: filter,
      url,
      filter: filters[filter],
    };
  });
  allFilters.splice(0, 0, {
    headline: 'Normal',
    url,
    filter: null,
  });

  return allFilters;
};
export function FilterCarousel({ url, changeFilter }) {
  return (
    <Carousel
      height="1"
      images={
        getImagesWithFilters(url)
      }
      callback={changeFilter}
    />
  );
}

FilterCarousel.propTypes = {
  url: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

import React from 'react';
import { MdSearch } from 'react-icons/md';

import * as C from './styles';

import color from '~/styles/colors';

const SearchInput = () => {
  return (
    <C.Wrapper>
      <MdSearch color={color.second} size={24} />
      <input type="text" placeholder="Buscar por encomendas" />
    </C.Wrapper>
  );
};

export default SearchInput;

import React from 'react';
import { MdSearch } from 'react-icons/md';

import * as C from './styles';
import color from '~/styles/colors';

const SearchInput = ({ placeholder }) => {
  return (
    <C.Wrapper>
      <MdSearch color={color.second} size={24} />
      <input type="text" placeholder={placeholder} />
    </C.Wrapper>
  );
};

export default SearchInput;

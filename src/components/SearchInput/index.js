import React from 'react';
import { MdSearch } from 'react-icons/md';
import PropTypes from 'prop-types';

import * as C from './styles';
import color from '~/styles/colors';

const SearchInput = ({ placeholder, handleChange }) => {
  return (
    <C.Wrapper>
      <MdSearch color={color.second} size={24} />
      <input type="text" placeholder={placeholder} onChange={handleChange} />
    </C.Wrapper>
  );
};

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SearchInput;

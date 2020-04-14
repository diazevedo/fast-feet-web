import React from 'react';
import PropTypes from 'prop-types';
import * as C from './styles';

export default function TR({ children }) {
  return <C.TR>{children}</C.TR>;
}

TR.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

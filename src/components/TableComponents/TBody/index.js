import React from 'react';
import PropTypes from 'prop-types';

import * as C from './styles';

export default function TBody({ children }) {
  return <C.TBody>{children}</C.TBody>;
}

TBody.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

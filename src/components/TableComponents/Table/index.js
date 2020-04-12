import React from 'react';
import PropTypes from 'prop-types';

import * as C from './styles';

const Table = ({ children }) => {
  return <C.Table>{children}</C.Table>;
};

Table.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;

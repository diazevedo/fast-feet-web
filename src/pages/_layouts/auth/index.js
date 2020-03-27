import React from 'react';
import PropTypes from 'prop-types';

import * as C from './styles';

const AuthLayout = ({ children }) => {
  return <C.Wrapper>{children}</C.Wrapper>;
};

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthLayout;

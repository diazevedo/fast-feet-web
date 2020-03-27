import React from 'react';
import PropTypes from 'prop-types';

import * as C from './styles';

import Header from '~/components/Header';

const SignedLayout = ({ children }) => {
  return (
    <C.Wrapper>
      <Header />
      {children}
    </C.Wrapper>
  );
};

SignedLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SignedLayout;

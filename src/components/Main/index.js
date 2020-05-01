import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const Main = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Main;

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './styles';

const ButtonIcon = ({ children, text, type, handleClick }) => {
  return (
    <Button type={type} onClick={() => handleClick()}>
      {children}
      <span>{text}</span>
    </Button>
  );
};

ButtonIcon.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  handleClick: PropTypes.func,
};

ButtonIcon.defaultProps = {
  type: 'button',
  handleClick: () => {},
};

export default ButtonIcon;

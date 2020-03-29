import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './styles';

const ButtonIcon = ({ children, text }) => {
  return (
    <Button>
      {children}
      <span>{text}</span>
    </Button>
  );
};

ButtonIcon.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  text: PropTypes.string.isRequired,
};

export default ButtonIcon;

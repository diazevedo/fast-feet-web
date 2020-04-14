import React from 'react';
import PropTypes from 'prop-types';

import * as C from './styles';

export default function TD({ text, children, showMobile }) {
  return (
    <C.TD showMobile={showMobile}>
      {text}
      {children}
    </C.TD>
  );
}

TD.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  showMobile: PropTypes.number,
};

TD.defaultProps = {
  showMobile: 1,
};

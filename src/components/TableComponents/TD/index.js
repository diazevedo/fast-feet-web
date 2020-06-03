import React from 'react';
import PropTypes from 'prop-types';

import * as C from './styles';

export default function TD({ children, showMobile }) {
  return <C.TD showMobile={showMobile}>{children}</C.TD>;
}

TD.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.node,
  ]),
  showMobile: PropTypes.number,
};

TD.defaultProps = {
  showMobile: 1,
  children: null,
};

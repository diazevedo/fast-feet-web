import React from 'react';
import PropTypes from 'prop-types';

import * as C from './styles';

export default function Avatar({ src, alt }) {
  return <C.Image src={src} alt={alt} />;
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

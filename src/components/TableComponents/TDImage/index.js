import React from 'react';

import * as C from './styles';

export default function TDImage({ src, alt }) {
  return <C.Image src={src} alt={alt} />;
}

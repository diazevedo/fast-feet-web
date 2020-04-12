import React from 'react';

import * as C from './styles';

export default function TD({ text, children, showMobile = 1 }) {
  return (
    <C.TD showMobile={showMobile}>
      {text}
      {children}
    </C.TD>
  );
}

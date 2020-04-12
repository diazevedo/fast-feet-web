import React from 'react';
import PropTypes from 'prop-types';
import * as C from './styles';

export default function THead({ header }) {
  return (
    <thead>
      <tr>
        {header.map((h) => (
          <C.TH key={h.text} showMobile={h.showMobile}>
            {h.text}
          </C.TH>
        ))}
      </tr>
    </thead>
  );
}

THead.propTypes = {
  header: PropTypes.arrayOf(PropTypes.object).isRequired,
};

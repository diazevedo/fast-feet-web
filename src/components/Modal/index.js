import React, { useState } from 'react';

import * as C from './styles';

export default function Modal() {
  const [open, setOpen] = useState(true);
  const closeModal = () => {
    setOpen(!open);
  };

  return (
    <C.Wrapper onClick={closeModal} modalOpened={open === true ? 1 : 0}>
      <div>
        <h3>Parcel details</h3>
        <p>Rua Beethoven, 1729</p>
        <p>Diadema - SP</p>
        <p>09960-580</p>

        <hr />

        <h3>Data</h3>
        <p>
          <span>Retirada:</span> 25/01/2020
        </p>
        <p>
          <span>Entrega:</span> 25/01/2020
        </p>

        <hr />
        <h3>Assinatura</h3>
        <img src="https://picsum.photos/350/100" alt="" srcSet="" />
      </div>
    </C.Wrapper>
  );
}

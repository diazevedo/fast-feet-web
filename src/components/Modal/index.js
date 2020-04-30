import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import * as C from './styles';

const modalRoot = document.getElementById('modal');

const Modal = ({ children, closeModal }) => {
  const elementRef = useRef(null);

  if (!elementRef.current) {
    elementRef.current = document.createElement('div');
  }

  useEffect(() => {
    modalRoot.appendChild(elementRef.current);
    return () => modalRoot.removeChild(elementRef.current);
  }, []);

  return createPortal(
    <C.Wrapper>
      <button type="button" onClick={closeModal}>
        close
      </button>
      <C.Content>{children}</C.Content>
    </C.Wrapper>,
    elementRef.current
  );
};

export default Modal;

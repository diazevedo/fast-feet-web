import React from 'react';
import PropTypes from 'prop-types';

import * as C from './styles';

export default function Modal({ closeModal, children }) {
  return (
    <C.Wrapper>
      <button type="button" className="close" onClick={closeModal}>
        close
      </button>
      <C.Content>{children}</C.Content>
    </C.Wrapper>
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  parcel: PropTypes.shape({
    end: PropTypes.string,
    started: PropTypes.string,
    name: PropTypes.string,
    recipient: PropTypes.shape({
      name: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      post_code: PropTypes.number,
    }),
  }),
};

Modal.defaultProps = {
  parcel: PropTypes.shape({
    end: 'To be delivered',
    started: 'Wait to be picked up',
    name: PropTypes.string,
    recipient: PropTypes.shape({
      name: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      post_code: PropTypes.number,
    }),
  }),
};

import React from 'react';
import PropTypes from 'prop-types';

import * as C from './styles';

export default function Modal({ closeModal, parcel }) {
  const { recipient = {} } = parcel;

  return (
    <C.Wrapper>
      <button type="button" className="close" onClick={closeModal}>
        close
      </button>
      <div className="content">
        <h3>Parcel details</h3>
        <p>{recipient.name || ''}</p>
        <p>
          {recipient.street || ''}, {recipient.number || 0}
        </p>
        <p>
          {recipient.city} - {recipient.state}
        </p>
        <p>{recipient.post_code}</p>

        <hr />

        <h3>Data</h3>
        <p>
          <span>Retirada:</span> {parcel.started}
        </p>
        <p>
          <span>Entrega:</span> {parcel.end}
        </p>

        <hr />
        <h3>Assinatura</h3>
        <img src="https://picsum.photos/400/50" alt="" srcSet="" />
      </div>
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

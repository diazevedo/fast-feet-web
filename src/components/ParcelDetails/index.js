import React from 'react';
import PropTypes from 'prop-types';
import * as C from './styles';

const ParcelDetails = ({ parcel, src }) => {
  const { recipient } = parcel;

  return (
    <C.Container>
      <C.ModalTitle>Parcel details</C.ModalTitle>
      <C.Text>{recipient.name}</C.Text>
      <C.Text>
        {recipient.street}, {recipient.number}
      </C.Text>
      <C.Text>
        {recipient.city} - {recipient.state}
      </C.Text>
      <C.Text>{recipient.post_code}</C.Text>

      <hr />

      <C.ModalTitle>Date</C.ModalTitle>
      <C.Text>
        <C.Span>Picked up:</C.Span> {parcel.started}
      </C.Text>
      <C.Text>
        <C.Span>Delivered:</C.Span> {parcel.end}
      </C.Text>

      <hr />

      <C.ModalTitle>Signature</C.ModalTitle>
      <C.Image src={src} alt="" srcSet="" />
    </C.Container>
  );
};

ParcelDetails.propTypes = {
  parcel: PropTypes.shape({
    recipient: PropTypes.shape({
      name: PropTypes.string,
      street: PropTypes.string,
      number: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      post_code: PropTypes.string,
    }),

    started: PropTypes.string,
    end: PropTypes.string,
  }),
  src: PropTypes.string,
};

ParcelDetails.defaultProps = {
  parcel: PropTypes.shape({
    recipient: PropTypes.shape({
      name: '',
      street: '',
      number: '',
      city: '',
      state: '',
      post_code: '',
    }),

    started: '',
    end: '',
  }),
  src: 'https://picsum.photos/400/50',
};

export default ParcelDetails;

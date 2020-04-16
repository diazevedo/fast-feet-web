import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const ParcelDetails = ({
  name,
  street,
  number,
  city,
  state,
  post_code,
  start,
  end,
  src,
}) => {
  return (
    <Container>
      <h3>Parcel details</h3>
      <p>{name}</p>
      <p>
        {street}, {number}
      </p>
      <p>
        {city} - {state}
      </p>
      <p>{post_code}</p>

      <hr />

      <h3>Data</h3>
      <p>
        <span>Retirada:</span> {start}
      </p>
      <p>
        <span>Entrega:</span> {end}
      </p>

      <hr />

      <h3>Signature</h3>
      <img src={src} alt="" srcSet="" />
    </Container>
  );
};

ParcelDetails.propTypes = {
  name: PropTypes.string,
  street: PropTypes.string,
  number: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  post_code: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string,
  src: PropTypes.string,
};

ParcelDetails.defaultProps = {
  name: '',
  street: '',
  number: '',
  city: '',
  state: '',
  post_code: '',
  start: '',
  end: '',
  src: 'https://picsum.photos/400/50',
};

export default ParcelDetails;

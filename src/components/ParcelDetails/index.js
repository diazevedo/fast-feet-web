import React from 'react';
import PropTypes from 'prop-types';
import * as C from './styles';

import useFetch from '~/hooks/useFetch';
import { formatParcelToModal } from '~/utils/functions/parcel';

const ParcelDetails = ({ id }) => {
  console.log(id);
  const [url, setUrl] = React.useState(null);

  const [parcel, error, isLoading] = useFetch({
    url: React.useMemo(() => {
      return `parcels/${id}`;
    }, [id]),
    options: React.useMemo(() => {
      return {};
    }, []),
    callback: React.useCallback((p) => formatParcelToModal(p), []),
    from: React.useMemo(() => {
      return 'Parcel Detais';
    }, []),
  });

  if (parcel.length === 0) {
    return null;
  }

  if (id === null) {
    return null;
  }

  if (error) {
    return <h1>Something went wrong.</h1>;
  }
  // console.log('parcel');
  // console.log(parcel);
  // console.log(isLoading);
  const { recipient, src } = parcel;

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
  id: PropTypes.number,
};

ParcelDetails.defaultProps = {
  id: null,
};

export default ParcelDetails;

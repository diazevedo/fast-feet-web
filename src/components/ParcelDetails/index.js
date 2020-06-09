import React from 'react';
import PropTypes from 'prop-types';
import * as C from './styles';

import useFetch from '~/hooks/useFetch';
import { formatParcelToModal } from '~/utils/functions/parcel';
import api from '~/services/api';

const ParcelDetails = ({ id }) => {
  const [parcel, setParcel] = React.useState({});

  const loadParcelDetais = React.useCallback(async () => {
    if (id) {
      const response = await api.get(`parcels/${id}`);
      const parcelFormated = formatParcelToModal(response.data);
      setParcel(parcelFormated);
    }
  }, [id]);

  React.useEffect(() => {
    loadParcelDetais();
  }, [loadParcelDetais]);

  if (Object.keys(parcel).length === 0 || id === null) {
    return null;
  }

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

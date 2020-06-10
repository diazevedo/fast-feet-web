import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import * as C from './styles';

import useFetch from '~/hooks/useFetch';
import { formatParcelToModal } from '~/utils/functions/parcel';

const ParcelDetails = ({ id }) => {
  const [parcel] = useFetch({
    url: `parcels/${id}`,
    callback: useCallback((p) => formatParcelToModal(p), []),
    options: useMemo(() => ({}), []),
  });

  if (Object.keys(parcel).length === 0) {
    return null;
  }

  const { recipient, url: imgUrl, started, end } = parcel;

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
        <C.Span>Picked up:</C.Span> {started}
      </C.Text>
      <C.Text>
        <C.Span>Delivered:</C.Span> {end}
      </C.Text>

      <hr />

      <C.ModalTitle>Signature</C.ModalTitle>
      <C.Image src={imgUrl} alt="" srcSet="" />
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

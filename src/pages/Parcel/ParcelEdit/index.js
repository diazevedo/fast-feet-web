/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '~/services/api';

import * as loadOptions from '~/utils/functions/parcel';

import FormParcel from '~/components/FormParcel';
import * as C from './styles';

const ParcelEdit = () => {
  const location = useLocation();
  const history = useHistory();

  const { parcel_id } = location.state;

  const onClickButtonBack = () => history.push({ pathname: '/parcel' });

  const handleSubmitForm = async (data) => {
    try {
      await api.put(`/parcels/${parcel_id}`, {
        product: data.product,
        courier_id: data.courier,
        recipient_id: data.recipient,
      });

      toast.success('The parcel was edited.');
    } catch (error) {
      toast.error('Something went wrong.');
    }
  };

  return (
    <C.Main>
      <FormParcel
        handleSubmit={handleSubmitForm}
        initialData={location.state}
        title="Edit Parcel"
        onClickButtonBack={onClickButtonBack}
        loadRecipients={loadOptions.loadRecipients}
        loadCouriers={loadOptions.loadCouriers}
      />
    </C.Main>
  );
};

export default ParcelEdit;

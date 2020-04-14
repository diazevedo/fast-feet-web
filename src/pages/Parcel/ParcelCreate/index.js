/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import FormParcel from '~/components/FormParcel';
import * as C from './styles';

import api from '~/services/api';
import * as loadOptions from '~/utils/functions/parcel';

const ParcelEdit = () => {
  const history = useHistory();

  const onClickButtonBack = () => history.push({ pathname: '/parcel' });

  const handleSubmitForm = async (data) => {
    try {
      await api.post('/parcels', {
        product: data.product,
        courier_id: data.courier,
        recipient_id: data.recipient,
      });

      toast.success('Parcel created.');
    } catch (error) {
      toast.error('Something went wrong.');
    }
  };

  return (
    <C.Main>
      <FormParcel
        handleSubmit={handleSubmitForm}
        title="Create Parcel"
        onClickButtonBack={onClickButtonBack}
        loadRecipients={loadOptions.loadRecipients}
        loadCouriers={loadOptions.loadCouriers}
      />
    </C.Main>
  );
};

export default ParcelEdit;

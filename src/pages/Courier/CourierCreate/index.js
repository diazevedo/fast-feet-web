/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import api from '~/services/api';
// import schema from './schema';
import * as loadOptions from '~/utils/functions/parcel';

import FormParcel from '~/components/FormParcel';
import * as C from './styles';

// constants password length
const schema = Yup.object().shape({
  recipient: Yup.object().required('Please select a courier.'),
  courier: Yup.object().required('Please select a recipient.'),
  product: Yup.string()
    .min(2, 'A product name must be longer than 2 characteres.')
    .required('Product name  is required.'),
});

const ParcelEdit = () => {
  const history = useHistory();

  const onClickButtonBack = () => history.push({ pathname: '/parcel' });

  const handleSubmitForm = async (data) => {
    try {
      await api.post('/parcels', {
        product: data.product,
        courier_id: data.courier.value,
        recipient_id: data.recipient.value,
      });
    } catch (error) {
      throw new Error('error');
    }
  };

  return (
    <C.Main>
      <FormParcel
        handleSubmit={handleSubmitForm}
        schema={schema}
        initialData={{}}
        title="Create Parcel"
        onClickButtonBack={onClickButtonBack}
        loadRecipients={loadOptions.loadRecipients}
        loadCouriers={loadOptions.loadCouriers}
      />
    </C.Main>
  );
};

export default ParcelEdit;

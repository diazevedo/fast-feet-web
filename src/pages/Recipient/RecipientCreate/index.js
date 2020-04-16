/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '~/services/api';

import FormRecipient from '~/components/FormRecipient';

import * as C from './styles';

const RecipientCreate = () => {
  const history = useHistory();

  const onClickButtonBack = () => history.push({ pathname: '/recipient' });

  const handleSubmitForm = async (data) => {
    try {
      await api.post('/recipients', {
        name: data.name,
        street: data.street,
        number: data.number,
        address_complement: data.address,
        city: data.city,
        state: data.state,
        post_code: data.post_code,
      });
      toast.success('Recipient has been created.');
    } catch (error) {
      toast.error('Something went wrong.');
    }
  };

  return (
    <C.Main>
      <FormRecipient
        handleSubmit={handleSubmitForm}
        title="Recipient Create"
        onClickButtonBack={onClickButtonBack}
      />
    </C.Main>
  );
};

export default RecipientCreate;

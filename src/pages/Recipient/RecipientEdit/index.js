/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useHistory } from 'react-router-dom';

import api from '~/services/api';

import Main from '~/components/Main';
import FormRecipient from '~/components/FormRecipient';

const RecipientCreate = () => {
  const history = useHistory();
  const { recipient_id } = history.location.state;

  const onClickButtonBack = () => history.push({ pathname: '/recipient' });

  const handleSubmitForm = async (data) => {
    try {
      await api.put(`/recipients/${recipient_id}`, {
        name: data.name,
        street: data.street,
        number: data.number,
        address_complement: data.address,
        city: data.city,
        state: data.state,
        post_code: data.post_code,
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <Main>
      <FormRecipient
        handleSubmit={handleSubmitForm}
        title="Edit recipient"
        initialData={history.location.state.recipient}
        onClickButtonBack={onClickButtonBack}
      />
    </Main>
  );
};

export default RecipientCreate;

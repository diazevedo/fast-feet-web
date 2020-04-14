/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '~/services/api';

import FormCourier from '~/components/FormCourier';

import * as C from './styles';

const CourierCreate = () => {
  const history = useHistory();

  const onClickButtonBack = () => history.push({ pathname: '/courier' });

  const handleSubmitForm = async (data) => {
    try {
      await api.post('admin/couriers', {
        name: data.name,
        email: data.email,
        avatar_id: data.avatar_id,
      });
      toast.success('Courier created.');
    } catch (error) {
      toast.error('Something went wrong.');
      throw new Error(error);
    }
  };

  return (
    <C.Main>
      <FormCourier
        handleSubmit={handleSubmitForm}
        title="Courier Create"
        onClickButtonBack={onClickButtonBack}
      />
    </C.Main>
  );
};

export default CourierCreate;

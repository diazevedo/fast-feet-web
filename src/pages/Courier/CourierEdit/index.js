/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import FormCourier from '~/components/FormCourier';
import * as C from './styles';

import api from '~/services/api';

const CourierCreate = () => {
  const history = useHistory();
  const location = useLocation();
  const { courier_id } = location.state;

  const onClickButtonBack = () => history.push({ pathname: '/courier' });

  const handleSubmitForm = async (data) => {
    try {
      await api.put(`admin/couriers/${courier_id}`, {
        name: data.name,
        email: data.email,
        avatar_id: data.avatar_id,
      });

      toast.success('The courier was updated.');
    } catch (error) {
      toast.error('Something went wrong.');
      throw new Error(error);
    }
  };

  return (
    <C.Main>
      <FormCourier
        handleSubmit={handleSubmitForm}
        title="Courier Edit"
        initialData={location.state}
        onClickButtonBack={onClickButtonBack}
      />
    </C.Main>
  );
};

export default CourierCreate;

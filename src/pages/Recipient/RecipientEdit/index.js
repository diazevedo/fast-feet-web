/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
// import * as Yup from 'yup';

import api from '~/services/api';
// import schema from './schema';

import FormCourier from '~/components/FormCourier';

import * as C from './styles';

// constants password length
// const schema = Yup.object().shape({
//   recipient: Yup.object().required('Please select a courier.'),
//   courier: Yup.object().required('Please select a recipient.'),
//   product: Yup.string()
//     .min(2, 'A product name must be longer than 2 characteres.')
//     .required('Product name  is required.'),
// });

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
    } catch (error) {
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

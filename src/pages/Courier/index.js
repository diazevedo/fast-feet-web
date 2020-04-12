import React, { useEffect, useState } from 'react';

import api from '~/services/api';
import history from '~/services/history';

import HeaderMainPage from '~/components/HeaderMainPage';

import * as T from '~/components/TableComponents';

import * as C from './styles';

import header from '~/utils/data/headerCouriers';

export default function Courier() {
  const [couriers, setCouriers] = useState([]);

  const handleDelete = async ({ id }) => {
    await api.delete(`/admin/couriers/${id}`);

    history.push('/');
  };

  useEffect(() => {
    const loadCouriers = async () => {
      const response = await api.get('/admin/couriers');

      setCouriers(response.data);
    };

    loadCouriers();
  }, []);

  const handleRegisterCourier = () =>
    history.push({ pathname: '/courier/create' });
  return (
    <C.Main>
      <HeaderMainPage
        title="Couriers Management"
        placeholder="Couriers management"
        textButton="Register"
        handleButton={handleRegisterCourier}
      />

      <T.Table header={header} body={couriers} handleDelete={handleDelete}>
        <T.THead header={header} />
      </T.Table>
    </C.Main>
  );
}

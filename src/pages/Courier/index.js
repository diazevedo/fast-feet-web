import React, { useState, useMemo } from 'react';
import { toast } from 'react-toastify';

import useFetch from '~/hooks/useFetch';
import api from '~/services/api';
import history from '~/services/history';

import HeaderMainPage from '~/components/HeaderMainPage';
import CouriersTable from '~/components/CouriersTable';

import * as C from './styles';

export default function Courier() {
  const [courierName, setCourierName] = useState('');

  const [couriers, error, loading] = useFetch({
    url: useMemo(() => '/admin/couriers/', []),
    options: useMemo(() => ({ name: courierName }), [courierName]),
  });

  const handleDelete = async ({ id }) => {
    try {
      await api.delete(`/admin/couriers/${id}`);
      toast.success('The courier has been deleted.');
      history.push('/courier');
    } catch (err) {
      toast.error('Something went wrong.');
    }
  };

  const handleRegisterCourier = () =>
    history.push({ pathname: `/courier/create` });

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (error) {
    toast.error(`Something went wrong.`);
  }

  return (
    <C.Main>
      <HeaderMainPage
        title="Couriers Management"
        placeholder="Search by courier name"
        textButton="Register"
        handleButton={handleRegisterCourier}
        handleChange={(e) => setCourierName(e.target.value)}
      />

      <CouriersTable couriers={couriers} handleDelete={handleDelete} />
    </C.Main>
  );
}

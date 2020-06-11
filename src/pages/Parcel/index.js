import React, { useMemo, useState, useCallback } from 'react';
import { toast } from 'react-toastify';

import useFetch from '~/hooks/useFetch';
import api from '~/services/api';
import history from '~/services/history';
import { formatParcels } from '~/utils/functions/parcel';

import HeaderMainPage from '~/components/HeaderMainPage';
import Modal from '~/components/Modal';
import ParcelDetails from '~/components/ParcelDetails';
import ParcelsTable from '~/components/ParcelTable';

import * as C from './styles';

const Parcel = () => {
  const [productName, setProductName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [parcelId, setParcelId] = useState(null);

  const [parcels, error, loading] = useFetch({
    url: useMemo(() => '/parcels', []),
    options: useMemo(() => ({ product_name: productName }), [productName]),
    callback: useCallback((p) => formatParcels(p), []),
  });

  const handleDelete = async ({ id }) => {
    try {
      await api.delete(`/parcels/${id}`);
      toast.success('The parcel has been deleted.');
      history.push('/');
    } catch (err) {
      toast.error('Something went wrong.');
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleViewParcel = async (id) => {
    setParcelId(id);
    setShowModal(true);
  };

  const handleRegisterParcel = () =>
    history.push({ pathname: '/parcel/create' });

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (error) {
    toast.error(`Something went wrong.`);
  }

  return (
    <C.Main>
      {showModal ? (
        <Modal closeModal={closeModal}>
          <ParcelDetails id={parcelId} />
        </Modal>
      ) : null}

      <HeaderMainPage
        title="Parcels management"
        placeholder="Search by the parcel"
        textButton="register"
        handleButton={handleRegisterParcel}
        handleChange={(e) => setProductName(e.target.value)}
      />

      <ParcelsTable
        parcels={parcels}
        handleDelete={handleDelete}
        handleViewParcel={handleViewParcel}
      />
    </C.Main>
  );
};

export default Parcel;

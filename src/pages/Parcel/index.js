import React, { useEffect, useState } from 'react';
import { MdAdd } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import PageTitle from '~/components/PageTitle';
import SearchInput from '~/components/SearchInput';
import ButtonIcon from '~/components/ButtonIcon';
import Table from '~/components/Table';
import Modal from '~/components/Modal';

import * as C from './styles';

import color from '~/styles/colors';

const data = {
  headers: [
    'ID',
    'Destinatário',
    'Entregador',
    'Cidade',
    'Estado',
    'Status',
    'Actions',
  ],
  parcels: [
    {
      id: '#01',
      recipient: 'Ludwig van Beethoven',
      courier: 'John Doe',
      city: 'Rio do Sul',
      state: 'Santa Catarina',
      status: 'ENTREGUE',
    },
    {
      id: '#02',
      recipient: 'Ludwig van Beethoven',
      courier: 'John Doe',
      city: 'Rio do Sul',
      state: 'Santa Catarina',
      status: 'ENTREGUE',
    },
  ],
};

const parcelStatus = (parcel) => {
  if (parcel.canceled_at) return 'cancelled';
  if (parcel.end_date) return 'delivered';
  if (parcel.start_date) return 'picked';

  return 'pending';
};

export default function Parcel() {
  const [parcels, setParcels] = useState([]);

  const handleDelete = async ({ id }) => {
    await api.delete(`/parcels/${id}`);

    history.push('/');
  };

  useEffect(() => {
    const loadParcels = async () => {
      const response = await api.get('/parcels');

      const parcelsFormatted = response.data.map((parcel) => ({
        ...parcel,
        status: parcelStatus(parcel),
      }));

      setParcels(parcelsFormatted);
    };

    loadParcels();
  }, []);

  const handleViewParcel = ({ id }) => {
    console.log(id);
  };

  return (
    <C.Main>
      <Modal />
      <PageTitle>Parcels management</PageTitle>

      <div className="wrapper-buttons">
        <SearchInput placeholder="buscar encomenda" />
        <ButtonIcon text="cadastrar">
          <MdAdd color={color.fourth} size={30} />
        </ButtonIcon>
      </div>

      <Table
        headers={data.headers}
        body={parcels}
        handleDelete={handleDelete}
        handleView={handleViewParcel}
      />
    </C.Main>
  );
}

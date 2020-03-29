import React, { useEffect, useState } from 'react';
import { MdMoreHoriz, MdAdd } from 'react-icons/md';

import api from '~/services/api';

import * as C from './styles';
import PageTitle from '~/components/PageTitle';
import SearchInput from '~/components/SearchInput';
import ButtonIcon from '~/components/ButtonIcon';
import Table from '~/components/Table';

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

export default function Parcel() {
  const [parcels, setParcels] = useState([]);
  useEffect(() => {
    const loadParcels = async () => {
      const response = await api.get('/parcels');

      setParcels(response.data);
    };

    loadParcels();
  }, []);

  return (
    <C.Main>
      <PageTitle>Parcels management</PageTitle>

      <div>
        <SearchInput placeholder="buscar encomenda" />
        <ButtonIcon text="cadastrar">
          <MdAdd color={color.fourth} size={30} />
        </ButtonIcon>
      </div>

      <Table
        headers={data.headers}
        body={parcels}
        Icon={() => <MdMoreHoriz color={color.second} size={24} />}
      />
    </C.Main>
  );
}

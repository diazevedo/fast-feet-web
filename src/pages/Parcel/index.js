import React from 'react';
import { MdMoreHoriz } from 'react-icons/md';

import * as C from './styles';
import PageTitle from '~/components/PageTitle';
import SearchInput from '~/components/SearchInput';
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
  return (
    <C.Main>
      <PageTitle>Parcel management</PageTitle>
      <SearchInput>Parcel management</SearchInput>
      <Table
        headers={data.headers}
        body={data.parcels}
        Icon={() => <MdMoreHoriz color={color.second} size={24} />}
      />
    </C.Main>
  );
}

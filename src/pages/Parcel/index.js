import React, { useEffect, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { format, parseISO } from 'date-fns';

import { useDispatch, useSelector } from 'react-redux';

import api from '~/services/api';
import history from '~/services/history';

import PageTitle from '~/components/PageTitle';
import SearchInput from '~/components/SearchInput';
import ButtonIcon from '~/components/ButtonIcon';
import Table from '~/components/Table';
import Modal from '~/components/Modal';

import { hideModal } from '~/store/modules/modal/actions';

import * as C from './styles';

import color from '~/styles/colors';

const data = {
  headers: [
    {
      text: 'ID',
      showMobile: 1,
    },
    {
      text: 'Recipient',
      showMobile: 1,
    },
    {
      text: 'Courier',
      showMobile: 1,
    },
    {
      text: 'City',
      showMobile: 0,
    },
    {
      text: 'State',
      showMobile: 0,
    },
    {
      text: 'Status',
      showMobile: 1,
    },
    {
      text: 'Actions',
      showMobile: 0,
    },
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

const formatDate = (date) => format(parseISO(date), 'dd/MM/yyyy');

export default function Parcel() {
  const [parcels, setParcels] = useState([]);
  const [parcelSelected, setParcelSelected] = useState({});

  const dispatch = useDispatch();
  const modalOpened = useSelector((state) => state.modal.opened);

  const handleDelete = async ({ id }) => {
    await api.delete(`/parcels/${id}`);

    history.push('/');
  };

  const closeModal = () => {
    dispatch(hideModal());
    setParcelSelected({});
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

  const handleViewParcel = async (id) => {
    const response = await api.get(`/parcels/${id}`);

    const parcelFormatted = {
      ...response.data,
      started: response.data.start_date
        ? formatDate(response.data.start_date)
        : 'To be picked up',
      end: response.data.end_date
        ? formatDate(response.data.end_date)
        : 'To be delivered',
    };
    setParcelSelected(parcelFormatted);
  };

  return (
    <C.Main>
      {modalOpened ? (
        <Modal closeModal={closeModal} parcel={parcelSelected} />
      ) : (
        ''
      )}

      <PageTitle>Parcels management</PageTitle>

      <C.WrapperButtons>
        <SearchInput placeholder="buscar encomenda" />
        <ButtonIcon text="register">
          <MdAdd color={color.fourth} size={30} />
        </ButtonIcon>
      </C.WrapperButtons>

      <Table
        headers={data.headers}
        body={parcels}
        handleDelete={handleDelete}
        handleView={handleViewParcel}
      />
    </C.Main>
  );
}

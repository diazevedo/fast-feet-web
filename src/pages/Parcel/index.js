import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';

import api from '~/services/api';
import history from '~/services/history';
import { parcelStatus } from '~/utils/functions/parcel';
import { hideModal } from '~/store/modules/modal/actions';

import HeaderMainPage from '~/components/HeaderMainPage';
import * as T from '~/components/TableComponents';
import Modal from '~/components/Modal';
import Status from '~/components/Status';
import Actions from '~/components/Actions';

import * as C from './styles';
import header from '~/utils/data/headerParcels';

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

  const handleRegisterParcel = () =>
    history.push({ pathname: '/parcel/create' });

  return (
    <C.Main>
      {modalOpened ? (
        <Modal closeModal={closeModal} parcel={parcelSelected} />
      ) : (
        ''
      )}

      <HeaderMainPage
        title="Parcels management"
        placeholder="Parcels recipient"
        textButton="register"
        handleButton={handleRegisterParcel}
      />

      <T.Table>
        <T.THead header={header} />
        <T.TBody>
          {parcels.map((parcel) => (
            <T.TR>
              <T.TD>{parcel.id}</T.TD>
              <T.TD>{parcel.recipient.name}</T.TD>
              <T.TD>
                <C.WrapperImageTd>
                  <T.TDImage
                    src={
                      (parcel.courier.avatar && parcel.courier.avatar.url) ||
                      'https://api.adorable.io/avatars/50/abott@adorable.png'
                    }
                  />
                  <span>{parcel.courier.name}</span>
                </C.WrapperImageTd>
              </T.TD>
              <T.TD showMobile={0}>{parcel.recipient.city}</T.TD>
              <T.TD showMobile={0}>{parcel.recipient.state}</T.TD>
              <T.TD>
                <Status status={parcel.status}>{parcel.status}</Status>
              </T.TD>
              <T.TD>
                <Actions
                  handleDelete={handleDelete}
                  handleView={handleViewParcel}
                  goTo="/parcel/edit/"
                  state={{
                    parcel_id: parcel.id,
                    product: parcel.product,
                    recipient: {
                      value: parcel.recipient.id,
                      label: parcel.recipient.name,
                    },
                    courier: {
                      value: parcel.courier.id,
                      label: parcel.courier.name,
                    },
                  }}
                />
              </T.TD>
            </T.TR>
          ))}
        </T.TBody>
      </T.Table>
    </C.Main>
  );
}

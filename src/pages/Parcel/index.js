import React, { useMemo, useState, useCallback } from 'react';
import { toast } from 'react-toastify';

import useFetch from '~/hooks/useFetch';
import api from '~/services/api';
import history from '~/services/history';
import { formatParcels } from '~/utils/functions/parcel';
import userInitials from '~/utils/functions/userInitials';

import HeaderMainPage from '~/components/HeaderMainPage';
import * as T from '~/components/TableComponents';
import Status from '~/components/Status';
import Modal from '~/components/Modal';
import Actions from '~/components/Actions';
import ParcelDetails from '~/components/ParcelDetails';
import Avatar from '~/components/Avatar';
import AvatarNoPhoto from '~/components/AvatarNoPhoto';

import * as C from './styles';
import header from '~/utils/data/headerParcels';

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
        placeholder="Parcels recipient"
        textButton="register"
        handleButton={handleRegisterParcel}
        handleChange={(e) => setProductName(e.target.value)}
      />

      <T.Table>
        <T.THead header={header} />
        <T.TBody>
          {parcels.map((parcel) => (
            <T.TR key={parcel.id.toString()}>
              <T.TD>#{parcel.id.toString().padStart(2, '0')}</T.TD>
              <T.TD>{parcel.recipient.name || 'N/A'}</T.TD>
              <T.TD>
                <C.WrapperImageTd>
                  {parcel.courier.avatar && parcel.courier.avatar.url ? (
                    <Avatar
                      src={parcel.courier.avatar.url}
                      alt={`${parcel.courier.name}'s photo`}
                    />
                  ) : (
                    <AvatarNoPhoto name={userInitials(parcel.courier.name)} />
                  )}
                  <C.CourierName>{parcel.courier.name}</C.CourierName>
                </C.WrapperImageTd>
              </T.TD>
              <T.TD showMobile={0}>{parcel.recipient.city || 'N/A'}</T.TD>
              <T.TD showMobile={0}>{parcel.recipient.state || 'N/A'}</T.TD>
              <T.TD>
                <Status status={parcel.status}>{parcel.status}</Status>
              </T.TD>
              <T.TD>
                <Actions
                  viewOption
                  editOption
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
                  data={parcel}
                />
              </T.TD>
            </T.TR>
          ))}
        </T.TBody>
      </T.Table>
    </C.Main>
  );
};

export default Parcel;

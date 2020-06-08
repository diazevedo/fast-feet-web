import React, { useEffect, useState, useCallback } from 'react';
import { format, parseISO } from 'date-fns';
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

const formatDate = (date) => format(parseISO(date), 'dd/MM/yyyy');

export default function Parcel() {
  const [productName, setProductName] = useState('');

  const formatCallback = useCallback((parcels) => formatParcels(parcels), []);

  const [parcels, error] = useFetch({
    url: 'parcels/',
    options: React.useMemo(() => {
      return { product_name: productName };
    }, [productName]),
    // callback: useCallback((p) => formatParcels(p), []),
    callback: formatCallback,
  });

  // const [, throwError] = useState(null);

  const [parcelSelected, setParcelSelected] = useState({});
  const [showModal, setShowModal] = useState(false);

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
    setParcelSelected({});
  };

  // const loadParcels = useCallback(async (productName = '') => {
  //   try {
  //     const response = await api.get('/parcels', {
  //       params: { product_name: productName },
  //     });
  //     const parcelsFormatted = formatParcels(response.data);
  //     setParcels(parcelsFormatted);
  //   } catch (err) {
  //     throwError(() => {
  //       throw new Error(JSON.stringify(err.response.status));
  //     });
  //   }
  // }, []);

  // useEffect(() => {
  //   loadParcels();
  // }, [loadParcels]);

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
    setShowModal(true);
  };

  const handleRegisterParcel = () =>
    history.push({ pathname: '/parcel/create' });

  // const handleChange = (e) => {
  //   loadParcels(e.target.value);
  // };

  return (
    <C.Main>
      {showModal ? (
        <Modal closeModal={closeModal}>
          <ParcelDetails
            parcel={parcelSelected}
            recipient={parcelSelected.recipient}
            src={
              parcelSelected.signature && parcelSelected.signature.url
                ? parcelSelected.signature.url
                : 'https://api.adorable.io/avatars/50/abott@adorable.png'
            }
          />
        </Modal>
      ) : null}

      {error ? toast.error('Something went wrong.') : null}

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
}

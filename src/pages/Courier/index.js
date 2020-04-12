import React, { useEffect, useState } from 'react';

import api from '~/services/api';
import history from '~/services/history';

import HeaderMainPage from '~/components/HeaderMainPage';
import Actions from '~/components/Actions';

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

      <T.Table>
        <T.THead header={header} />
        <T.TBody>
          {couriers.map((courier) => (
            <T.TR>
              <T.TD>{courier.id}</T.TD>
              <T.TD>
                <C.WrapperImageTd>
                  <T.TDImage
                    src={
                      (courier.avatar && courier.avatar.url) ||
                      'https://api.adorable.io/avatars/50/abott@adorable.png'
                    }
                  />
                </C.WrapperImageTd>
              </T.TD>
              <T.TD>{courier.name}</T.TD>
              <T.TD showMobile={0}>{courier.email}</T.TD>

              <T.TD>
                <Actions
                  handleDelete={handleDelete}
                  handleView={console.log}
                  goTo="/courier/edit/"
                  // state={{
                  //   parcel_id: courier.id,
                  //   product: courier.product,
                  //   recipient: {
                  //     value: courier.recipient.id,
                  //     label: courier.recipient.name,
                  //   },
                  //   courier: {
                  //     value: parcel.courier.id,
                  //     label: parcel.courier.name,
                  //   },
                  // }}
                  state={{}}
                />
              </T.TD>
            </T.TR>
          ))}
        </T.TBody>
      </T.Table>
    </C.Main>
  );
}

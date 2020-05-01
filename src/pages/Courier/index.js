import React, { useEffect, useState, useCallback } from 'react';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';
import userInitials from '~/utils/functions/userInitials';

import HeaderMainPage from '~/components/HeaderMainPage';
import Actions from '~/components/Actions';
import AvatarNoPhoto from '~/components/AvatarNoPhoto';
import Avatar from '~/components/Avatar';

import * as T from '~/components/TableComponents';
import * as C from './styles';

import header from '~/utils/data/headerCouriers';

export default function Courier() {
  const [couriers, setCouriers] = useState([]);

  const handleDelete = async ({ id }) => {
    try {
      await api.delete(`/admin/couriers/${id}`);
      toast.success('The courier has been updated.');
      history.push('/courier');
    } catch (error) {
      toast.error('Something went wrong.');
    }
  };

  const loadCouriers = useCallback(async (name = '') => {
    const response = await api.get('/admin/couriers', {
      params: { name },
    });

    setCouriers(response.data);
  }, []);

  useEffect(() => {
    loadCouriers();
  }, [loadCouriers]);

  const handleRegisterCourier = () =>
    history.push({ pathname: `/courier/create` });

  const handleChange = (e) => loadCouriers(e.target.value);

  return (
    <C.Main>
      <HeaderMainPage
        title="Couriers Management"
        placeholder="Couriers management"
        textButton="Register"
        handleButton={handleRegisterCourier}
        handleChange={handleChange}
      />

      <T.Table>
        <T.THead header={header} />
        <T.TBody>
          {couriers.map((courier) => (
            <T.TR>
              <T.TD>#{courier.id.toString().padStart(2, '0')}</T.TD>
              <T.TD showMobile={0}>
                {courier.avatar && courier.avatar.url ? (
                  <Avatar
                    src={courier.avatar.url}
                    alt={`${courier.name}'s photo`}
                  />
                ) : (
                  <AvatarNoPhoto name={userInitials(courier.name)} />
                )}
              </T.TD>
              <T.TD>{courier.name}</T.TD>
              <T.TD showMobile={0}>{courier.email}</T.TD>

              <T.TD>
                <Actions
                  handleDelete={handleDelete}
                  handleView={{}}
                  goTo="courier/edit"
                  state={{
                    courier_id: courier.id,
                    name: courier.name,
                    email: courier.email,
                    avatar: courier.avatar,
                  }}
                  editOption
                  data={courier}
                />
              </T.TD>
            </T.TR>
          ))}
        </T.TBody>
      </T.Table>
    </C.Main>
  );
}

import React, { useEffect, useState, useCallback } from 'react';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';
import userInitials from '~/utils/functions/userInitials';

import Main from '~/components/Main';
import HeaderMainPage from '~/components/HeaderMainPage';
import Actions from '~/components/Actions';
import AvatarNoPhoto from '~/components/AvatarNoPhoto';
import Avatar from '~/components/Avatar';

import * as T from '~/components/TableComponents';

import header from '~/utils/data/headerCouriers';

export default function Courier({ match }) {
  console.log(match);
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
    history.push({ pathname: `${match.url}/create` });

  const handleChange = (e) => loadCouriers(e.target.value);

  return (
    <Main>
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
                  goTo={`${match.url}/edit`}
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
    </Main>
  );
}

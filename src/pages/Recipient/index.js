import React, { useEffect, useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import HeaderMainPage from '~/components/HeaderMainPage';
import * as T from '~/components/TableComponents';

import Actions from '~/components/Actions';

import * as C from './styles';
import header from '~/utils/data/headerRecipients';

export default function Parcel() {
  const [recipients, setRecipients] = useState([]);

  const loadRecipients = useCallback(async (name = '') => {
    const response = await api.get('/recipients', { params: { name } });
    const recipientsFormatted = response.data.map((recipient) => ({
      ...recipient,
      address: `${recipient.number}, ${recipient.street}, ${recipient.city} - ${recipient.state}`,
    }));
    setRecipients(recipientsFormatted);
  }, []);

  useEffect(() => {
    loadRecipients();
  }, [loadRecipients]);

  const handleRegisterRecipient = () =>
    history.push({ pathname: '/recipient/create' });

  const handleChange = (e) => loadRecipients(e.target.value);

  const handleDelete = async ({ id }) => {
    try {
      await api.put(`/recipients/${id}/cancel`);

      toast.success('The recipient has been deleted.');
      loadRecipients();
    } catch (error) {
      toast.error('Something went wrong.');
    }
  };
  return (
    <C.Main>
      <HeaderMainPage
        title="Recipients management"
        placeholder="Recipient search"
        textButton="register"
        handleButton={handleRegisterRecipient}
        handleChange={handleChange}
      />

      <T.Table>
        <T.THead header={header} />
        <T.TBody>
          {recipients.map((recipient) => (
            <T.TR>
              <T.TD>#{recipient.id.toString().padStart(2, '0')}</T.TD>
              <T.TD>{recipient.name}</T.TD>
              <T.TD showMobile={0}>{recipient.address}</T.TD>
              <T.TD>
                <Actions
                  handleDelete={handleDelete}
                  handleView={{}}
                  goTo="/recipient/edit/"
                  state={{
                    recipient_id: recipient.id,
                    recipient,
                  }}
                  data={recipient}
                />
              </T.TD>
            </T.TR>
          ))}
        </T.TBody>
      </T.Table>
    </C.Main>
  );
}

import React, { useEffect, useState } from 'react';

import api from '~/services/api';
import history from '~/services/history';

import HeaderMainPage from '~/components/HeaderMainPage';
import * as T from '~/components/TableComponents';

import Actions from '~/components/Actions';

import * as C from './styles';
import header from '~/utils/data/headerRecipients';

export default function Parcel() {
  const [recipients, setRecipients] = useState([]);

  const handleDelete = async ({ id }) => {
    await api.delete(`/recipients/${id}`);

    history.push('/');
  };

  useEffect(() => {
    const loadRecipients = async () => {
      const response = await api.get('/recipients');

      const recipientsFormatted = response.data.map((recipient) => ({
        ...recipient,
        address: `${recipient.number}, ${recipient.street}, ${recipient.city} - ${recipient.state}`,
      }));

      setRecipients(recipientsFormatted);
    };

    loadRecipients();
  }, []);

  const handleRegisterRecipient = () =>
    history.push({ pathname: '/recipient/create' });

  return (
    <C.Main>
      <HeaderMainPage
        title="Recipients management"
        placeholder="Recipient search"
        textButton="register"
        handleButton={handleRegisterRecipient}
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

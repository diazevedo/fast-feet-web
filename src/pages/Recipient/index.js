import React, { useState, useCallback, useMemo } from 'react';
import { toast } from 'react-toastify';

import useFetch from '~/hooks/useFetch';

import api from '~/services/api';
import history from '~/services/history';

import HeaderMainPage from '~/components/HeaderMainPage';
import RecipientsTable from '~/components/RecipientsTable';

import { formatRecipients } from '~/utils/functions/recipients';

import * as C from './styles';

export default function Parcel() {
  const [recipientName, setRecipientName] = useState('');

  const [recipients, error, loading] = useFetch({
    url: useMemo(() => '/recipients', []),
    options: useMemo(() => ({ name: recipientName }), [recipientName]),
    callback: useCallback((r) => formatRecipients(r), []),
  });

  const handleRegisterRecipient = () =>
    history.push({ pathname: '/recipient/create' });

  const handleDelete = async ({ id }) => {
    try {
      await api.put(`/recipients/${id}/cancel`);

      toast.success('The recipient has been deleted.');
      history.push('/recipient');
    } catch (err) {
      toast.error('Something went wrong.');
    }
  };

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (error) {
    toast.error(`Something went wrong.`);
  }

  return (
    <C.Main>
      <HeaderMainPage
        title="Recipients management"
        placeholder="Search by name"
        textButton="register"
        handleButton={handleRegisterRecipient}
        handleChange={(e) => setRecipientName(e.target.value)}
      />

      <RecipientsTable recipients={recipients} handleDelete={handleDelete} />
    </C.Main>
  );
}

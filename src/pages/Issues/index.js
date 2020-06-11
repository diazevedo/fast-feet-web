import React, { useState, useMemo } from 'react';

import { toast } from 'react-toastify';

import * as C from './styles';

import api from '~/services/api';
import history from '~/services/history';

import PageTitle from '~/components/PageTitle';
import Modal from '~/components/Modal';
import IssuesTable from '~/components/IssuesTable';
import IssuesDetails from '~/components/IssueDetails';

import useFetch from '~/hooks/useFetch';

export default function Parcel() {
  const [issues, error, loading] = useFetch({
    url: useMemo(() => '/parcels/problems', []),
    options: useMemo(() => ({}), []),
  });

  const [issueSelected, setIssueSelected] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async ({ id }) => {
    await api.delete(`/parcels/problems/${id}`);
    toast.success('The delivery has been deleted.');
    history.push('/issues');
  };

  const handleViewProblem = (issue) => {
    setIssueSelected(issue);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setIssueSelected({});
  };

  if (loading) {
    return <h1>LOADING</h1>;
  }

  if (error) {
    toast.error(`Something went wrong.`);
  }

  return (
    <C.Main>
      {showModal ? (
        <Modal closeModal={closeModal}>
          <IssuesDetails description={issueSelected.description} />
        </Modal>
      ) : null}

      <PageTitle>Deliveries issues</PageTitle>

      <IssuesTable
        issues={issues}
        handleDelete={handleDelete}
        handleViewProblem={handleViewProblem}
      />
    </C.Main>
  );
}

import React, { useState, useMemo } from 'react';

import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import PageTitle from '~/components/PageTitle';
import * as T from '~/components/TableComponents';
import Modal from '~/components/Modal';
import Actions from '~/components/Actions';
import IssuesDetails from '~/components/IssueDetails';

import useFetch from '~/hooks/useFetch';
import * as C from './styles';
import header from '~/utils/data/headerIssues';

export default function Parcel() {
  const [issues, error, loading] = useFetch({
    url: useMemo(() => '/parcels/problems', []),
    options: useMemo(() => ({}), []),
  });

  const [issueSelected, setIssueSelected] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async ({ id }) => {
    await api.delete(`/parcels/problems/${id}`);
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

      <T.Table>
        <T.THead header={header} />
        <T.TBody>
          {issues.map((issue) => (
            <T.TR key={issue.id.toString()}>
              <T.TD>#{issue.parcel.id.toString().padStart(2, '0')}</T.TD>
              <T.TD>
                <C.P>{issue.description}</C.P>
              </T.TD>
              <T.TD>
                <Actions
                  viewOption
                  handleDelete={handleDelete}
                  handleView={() => handleViewProblem(issue)}
                  data={issue}
                  cancellationText="Cancel delivery"
                />
              </T.TD>
            </T.TR>
          ))}
        </T.TBody>
      </T.Table>
    </C.Main>
  );
}

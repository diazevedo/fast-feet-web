import React, { useEffect, useState } from 'react';

import api from '~/services/api';
import history from '~/services/history';

import PageTitle from '~/components/PageTitle';
import * as T from '~/components/TableComponents';
import Modal from '~/components/Modal';
import Actions from '~/components/Actions';
import IssuesDetails from '~/components/IssueDetails';

import * as C from './styles';
import header from '~/utils/data/headerIssues';

export default function Parcel() {
  const [issues, setIssues] = useState([]);
  const [issueSelected, setIssueSelected] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async ({ id }) => {
    await api.delete(`/parcels/problems/${id}`);
    history.push('/issues');
  };

  const closeModal = () => {
    setShowModal(false);
    setIssueSelected({});
  };

  useEffect(() => {
    const loadIssues = async () => {
      try {
        const response = await api.get('/parcels/problems');
        setIssues(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    loadIssues();
  }, []);

  const handleViewProblem = async (id) => {
    try {
      const response = await api.get(`/problems/${id}`);

      setIssueSelected(response.data);
      setShowModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <C.Main>
      {showModal ? (
        <Modal closeModal={closeModal}>
          <IssuesDetails text={issueSelected.description} />
        </Modal>
      ) : (
        ''
      )}
      <PageTitle>Deliveries issues</PageTitle>

      <T.Table>
        <T.THead header={header} />
        <T.TBody>
          {issues.map((issue) => (
            <T.TR>
              <T.TD>#{issue.parcel.id.toString().padStart(2, '0')}</T.TD>
              <T.TD>
                <C.P>{issue.description}</C.P>
              </T.TD>
              <T.TD>
                <Actions
                  viewOption
                  handleDelete={handleDelete}
                  handleView={handleViewProblem}
                  goTo=""
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
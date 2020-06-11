import React from 'react';

import * as C from './styles';

import * as T from '~/components/TableComponents';
import Actions from '~/components/Actions';

import header from '~/utils/data/headerIssues';

const IssuesTable = ({ issues, handleDelete, handleViewProblem }) => {
  return (
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
  );
};

export default IssuesTable;

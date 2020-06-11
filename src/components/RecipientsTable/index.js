import React from 'react';

import * as T from '~/components/TableComponents';
import Actions from '~/components/Actions';

import header from '~/utils/data/headerRecipients';

const RecipientsTable = ({ recipients, handleDelete }) => {
  return (
    <T.Table>
      <T.THead header={header} />
      <T.TBody>
        {recipients.map((recipient) => (
          <T.TR key={recipient.id.toString()}>
            <T.TD>#{recipient.id.toString().padStart(2, '0')}</T.TD>
            <T.TD>{recipient.name}</T.TD>
            <T.TD showMobile={0}>{recipient.address}</T.TD>
            <T.TD>
              <Actions
                handleDelete={handleDelete}
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
  );
};

export default RecipientsTable;

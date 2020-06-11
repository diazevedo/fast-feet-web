import React from 'react';

import Actions from '~/components/Actions';
import AvatarNoPhoto from '~/components/AvatarNoPhoto';
import Avatar from '~/components/Avatar';
import * as T from '~/components/TableComponents';

import userInitials from '~/utils/functions/userInitials';
import header from '~/utils/data/headerCouriers';

const CouriersTable = ({ couriers, handleDelete }) => {
  return (
    <T.Table>
      <T.THead header={header} />
      <T.TBody>
        {couriers.map((courier) => (
          <T.TR key={courier.id.toString()}>
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
  );
};

export default CouriersTable;

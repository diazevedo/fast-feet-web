import React from 'react';

import * as C from './styles';
import userInitials from '~/utils/functions/userInitials';

import Actions from '~/components/Actions';
import Avatar from '~/components/Avatar';
import AvatarNoPhoto from '~/components/AvatarNoPhoto';
import Status from '~/components/Status';

import * as T from '~/components/TableComponents';

import header from '~/utils/data/headerParcels';

const ParcelsTable = ({ parcels, handleDelete, handleViewParcel }) => {
  return (
    <T.Table>
      <T.THead header={header} />
      <T.TBody>
        {parcels.map((parcel) => (
          <T.TR key={parcel.id.toString()}>
            <T.TD>#{parcel.id.toString().padStart(2, '0')}</T.TD>
            <T.TD>{parcel.recipient.name || 'N/A'}</T.TD>
            <T.TD>
              <C.WrapperImageTd>
                {parcel.courier.avatar && parcel.courier.avatar.url ? (
                  <Avatar
                    src={parcel.courier.avatar.url}
                    alt={`${parcel.courier.name}'s photo`}
                  />
                ) : (
                  <AvatarNoPhoto name={userInitials(parcel.courier.name)} />
                )}
                <C.CourierName>{parcel.courier.name}</C.CourierName>
              </C.WrapperImageTd>
            </T.TD>
            <T.TD showMobile={0}>{parcel.recipient.city || 'N/A'}</T.TD>
            <T.TD showMobile={0}>{parcel.recipient.state || 'N/A'}</T.TD>
            <T.TD>
              <Status status={parcel.status}>{parcel.status}</Status>
            </T.TD>
            <T.TD>
              <Actions
                viewOption
                editOption
                handleDelete={handleDelete}
                handleView={handleViewParcel}
                goTo="/parcel/edit/"
                state={{
                  parcel_id: parcel.id,
                  product: parcel.product,
                  recipient: {
                    value: parcel.recipient.id,
                    label: parcel.recipient.name,
                  },
                  courier: {
                    value: parcel.courier.id,
                    label: parcel.courier.name,
                  },
                }}
                data={parcel}
              />
            </T.TD>
          </T.TR>
        ))}
      </T.TBody>
    </T.Table>
  );
};
export default ParcelsTable;

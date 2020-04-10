import React from 'react';
import PropTypes from 'prop-types';

import Actions from '~/components/Actions';
import * as C from './styles';

const Table = ({ headers, body, handleDelete, handleView }) => {
  return (
    <C.Table>
      <thead>
        <tr>
          {headers.map((header) => (
            <C.TH key={header.text} showMobile={header.showMobile}>
              {header.text}
            </C.TH>
          ))}
        </tr>
      </thead>
      <C.TBody>
        {body.map((parcel) => (
          <tr key={parcel.id}>
            <td>#{parcel.id}</td>
            <td>{parcel.recipient.name}</td>
            <td>
              <C.WrapperImageTd>
                <img
                  src={
                    (parcel.courier.avatar && parcel.courier.avatar.url) ||
                    'https://api.adorable.io/avatars/50/abott@adorable.png'
                  }
                  alt=""
                />
                <span>{parcel.courier.name}</span>
              </C.WrapperImageTd>
            </td>
            <C.TdNonMobile>{parcel.recipient.city}</C.TdNonMobile>
            <C.TdNonMobile>{parcel.recipient.state}</C.TdNonMobile>
            <td>
              <C.Status status={parcel.status}>{parcel.status} </C.Status>
            </td>
            <td>
              <Actions
                handleDelete={handleDelete}
                parcel={parcel}
                handleView={handleView}
              />
            </td>
          </tr>
        ))}
      </C.TBody>
    </C.Table>
  );
};

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.object).isRequired,
  body: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleView: PropTypes.func.isRequired,
};

export default Table;

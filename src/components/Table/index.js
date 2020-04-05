import React from 'react';
import PropTypes from 'prop-types';

import Actions from '~/components/Actions';
import * as C from './styles';

const Table = ({ headers, body, handleDelete }) => {
  return (
    <C.Table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body.map((parcel) => (
          <tr key={parcel.id}>
            <td>{parcel.id}</td>
            <td>{parcel.recipient.name}</td>
            <td className="image">
              <div>
                <img
                  src={
                    (parcel.courier.avatar && parcel.courier.avatar.url) ||
                    'https://api.adorable.io/avatars/50/abott@adorable.png'
                  }
                  alt=""
                />
                <span>{parcel.courier.name}</span>
              </div>
            </td>
            <td>{parcel.recipient.city}</td>
            <td>{parcel.recipient.state}</td>
            <td>
              <span className="status">{parcel.status || 'ENTREGUE'}</span>
            </td>
            <td>
              <Actions handleDelete={handleDelete} parcel={parcel} />
            </td>
          </tr>
        ))}
      </tbody>
    </C.Table>
  );
};

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  body: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;

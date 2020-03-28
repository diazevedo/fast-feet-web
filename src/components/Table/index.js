import React from 'react';
import PropTypes from 'prop-types';

import * as C from './styles';

const Table = ({ headers, body, Icon }) => {
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
            <td>
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
              <span>{parcel.status || 'ENTREGUE'}</span>
            </td>
            <td>
              <button type="button">
                <Icon />
              </button>
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

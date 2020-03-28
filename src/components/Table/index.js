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
            <td>{parcel.recipient}</td>
            <td>{parcel.courier}</td>
            <td>{parcel.city}</td>
            <td>{parcel.state}</td>
            <td>
              <span>{parcel.status}</span>
            </td>
            <td>
              <Icon />
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

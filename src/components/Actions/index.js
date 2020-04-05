import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';

import {
  MdMoreHoriz,
  MdVisibility,
  MdModeEdit,
  MdDeleteForever,
} from 'react-icons/md';

import history from '~/services/history';
import color from '~/styles/colors';

import { Container } from './styles';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Actions = ({ handleDelete, parcel }) => {
  const [visible, setVisibility] = useState(false);

  const handleToggleVisible = () => {
    setVisibility(!visible);
  };

  return (
    <Container visible={visible === true ? 1 : 0}>
      <MdMoreHoriz
        color={color.second}
        size={24}
        onClick={handleToggleVisible}
      />
      <ul>
        <li>
          <MdVisibility color={color.primary} size={16} />
          <Link to="parcel/visualize">Visualizar</Link>
        </li>
        <li>
          <MdModeEdit color={color.delivered} size={16} />
          <Link to="parcel/edit">Editar</Link>
        </li>
        <li>
          <MdDeleteForever color={color.alert} size={16} />
          <button
            type="button"
            onClick={() =>
              confirmAlert({
                title: 'Confirm to submit',
                message: 'Are you sure to do this.',
                buttons: [
                  {
                    label: 'Yes',
                    onClick: () => handleDelete(parcel),
                  },
                  {
                    label: 'No',
                  },
                ],
              })
            }
          >
            Excluir
          </button>
        </li>
      </ul>
    </Container>
  );
};

export default Actions;

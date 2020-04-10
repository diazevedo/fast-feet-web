import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  MdMoreHoriz,
  MdVisibility,
  MdModeEdit,
  MdDeleteForever,
} from 'react-icons/md';

import { showModal } from '~/store/modules/modal/actions';
import { Container } from './styles';
import color from '~/styles/colors';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Actions = ({ parcel, handleDelete, handleView }) => {
  const [visible, setVisibility] = useState(false);
  const dispatch = useDispatch();

  const handleClickView = ({ id }) => {
    dispatch(showModal(id));
    handleView(id);
  };

  return (
    <Container visible={visible === true ? 1 : 0}>
      <MdMoreHoriz
        color={color.second}
        size={24}
        onClick={() => setVisibility(!visible)}
      />
      <ul>
        <li>
          <MdVisibility color={color.primary} size={16} />
          <button type="button" onClick={() => handleClickView(parcel)}>
            View
          </button>
        </li>
        <li>
          <MdModeEdit color={color.delivered} size={16} />
          <Link
            to={{
              pathname: `/parcel/edit/`,
              state: {
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
              },
            }}
          >
            Editar
          </Link>
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

Actions.propTypes = {
  parcel: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleView: PropTypes.func.isRequired,
};

export default Actions;

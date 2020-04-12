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

const Actions = ({ data, handleDelete, handleView, goTo, state }) => {
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
          <button type="button" onClick={() => handleClickView(data)}>
            View
          </button>
        </li>
        <li>
          <MdModeEdit color={color.delivered} size={16} />
          <Link
            to={{
              pathname: goTo,
              state,
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
                    onClick: () => handleDelete(data),
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
  data: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleView: PropTypes.func.isRequired,
  goTo: PropTypes.string.isRequired,
};

export default Actions;

/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import PropTypes from 'prop-types';

import {
  MdMoreHoriz,
  MdVisibility,
  MdModeEdit,
  MdDeleteForever,
} from 'react-icons/md';

import { Container } from './styles';
import color from '~/styles/colors';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Actions = ({
  data,
  handleDelete,
  handleView,
  goTo,
  state,
  viewOption,
  editOption,
  cancellationText,
}) => {
  const [visible, setVisibility] = useState(false);

  const handleClickView = ({ id }) => handleView(id);

  return (
    <Container visible={visible === true ? 1 : 0}>
      <MdMoreHoriz
        color={color.second}
        size={24}
        onClick={() => setVisibility(!visible)}
      />
      <ul>
        {viewOption ? (
          <li>
            <MdVisibility color={color.primary} size={16} />
            <button type="button" onClick={() => handleClickView(data)}>
              View
            </button>
          </li>
        ) : (
          ''
        )}
        {editOption ? (
          <li>
            <MdModeEdit color={color.delivered} size={16} />
            <Link
              to={{
                pathname: goTo,
                state,
              }}
            >
              Edit
            </Link>
          </li>
        ) : (
          ''
        )}

        <li>
          <MdDeleteForever color={color.alert} size={16} />
          <button
            type="button"
            onClick={() =>
              confirmAlert({
                title: 'Confirm to delete',
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
            {cancellationText}
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
  state: PropTypes.object,
  handleDelete: PropTypes.func.isRequired,
  handleView: PropTypes.func,
  goTo: PropTypes.string.isRequired,
  viewOption: PropTypes.bool,
  editOption: PropTypes.bool,
  cancellationText: PropTypes.string,
};

Actions.defaultProps = {
  state: {},
  editOption: false,
  viewOption: false,
  handleView: () => {},
  cancellationText: 'Delete',
};

export default Actions;

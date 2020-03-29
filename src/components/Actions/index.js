import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MdMoreHoriz,
  MdVisibility,
  MdModeEdit,
  MdDeleteForever,
} from 'react-icons/md';

import color from '~/styles/colors';
import { Container } from './styles';

const Actions = () => {
  const [visible, setVisibility] = useState(false);

  const handleToggleVisible = () => {
    setVisibility(!visible);
    console.log(visible);
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
          <Link to="/">Excluir</Link>
        </li>
      </ul>
    </Container>
  );
};

export default Actions;

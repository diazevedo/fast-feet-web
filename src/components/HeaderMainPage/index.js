import React from 'react';
import { MdAdd } from 'react-icons/md';

import * as C from './styles';
import color from '~/styles/colors';

import PageTitle from '~/components/PageTitle';
import SearchInput from '~/components/SearchInput';
import ButtonIcon from '~/components/ButtonIcon';

const HeaderMainPage = ({ title, placeholder, textButton, handleButton }) => {
  return (
    <C.Header>
      <PageTitle>{title}</PageTitle>

      <C.WrapperButtons>
        <SearchInput placeholder={placeholder} />
        <ButtonIcon text={textButton} handleClick={handleButton}>
          <MdAdd color={color.fourth} size={30} />
        </ButtonIcon>
      </C.WrapperButtons>
    </C.Header>
  );
};

export default HeaderMainPage;

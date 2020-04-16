import React from 'react';
import { MdAdd } from 'react-icons/md';
import PropTypes from 'prop-types';

import * as C from './styles';
import color from '~/styles/colors';

import PageTitle from '~/components/PageTitle';
import SearchInput from '~/components/SearchInput';
import ButtonIcon from '~/components/ButtonIcon';

const HeaderMainPage = ({
  title,
  placeholder,
  textButton,
  handleButton,
  handleChange,
}) => {
  return (
    <C.Header>
      <PageTitle>{title}</PageTitle>

      <C.WrapperButtons>
        <SearchInput placeholder={placeholder} handleChange={handleChange} />
        <ButtonIcon text={textButton} handleClick={handleButton}>
          <MdAdd color={color.fourth} size={30} />
        </ButtonIcon>
      </C.WrapperButtons>
    </C.Header>
  );
};

HeaderMainPage.propTypes = {
  placeholder: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  textButton: PropTypes.string.isRequired,
  handleButton: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default HeaderMainPage;

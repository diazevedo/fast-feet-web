import React from 'react';
import PropTypes from 'prop-types';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

import PageTitle from '~/components/PageTitle';
import ButtonIcon from '~/components/ButtonIcon';

import * as C from './styles';

import color from '~/styles/colors';

const FormHeader = ({ title, onClickButtonBack }) => {
  return (
    <C.Header>
      <PageTitle>{title}</PageTitle>
      <C.WrapperButtton>
        <ButtonIcon type="button" text="cancel" handleClick={onClickButtonBack}>
          <MdKeyboardArrowLeft color={color.fourth} size={25} />
        </ButtonIcon>

        <ButtonIcon text="Save" type="submit">
          <MdDone color={color.fourth} size={22} />
        </ButtonIcon>
      </C.WrapperButtton>
    </C.Header>
  );
};

FormHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onClickButtonBack: PropTypes.func.isRequired,
};

export default FormHeader;

/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';
import color from '~/styles/colors';

import * as C from './styles';
import PageTitle from '~/components/PageTitle';
import ButtonIcon from '~/components/ButtonIcon';
import AvatarInput from './AvatarInput';

export default function FormCourier({
  handleSubmit,
  title,
  onClickButtonBack,
}) {
  return (
    <C.FormCustom onSubmit={handleSubmit}>
      <C.Header>
        <PageTitle>{title}</PageTitle>
        <C.WrapperButtton>
          <ButtonIcon
            type="button"
            text="cancel"
            handleClick={onClickButtonBack}
          >
            <MdKeyboardArrowLeft color={color.fourth} size={25} />
          </ButtonIcon>

          <ButtonIcon text="Save" type="submit">
            <MdDone color={color.fourth} size={22} />
          </ButtonIcon>
        </C.WrapperButtton>
      </C.Header>
      <C.FormBody>
        <AvatarInput name="avatar_id" />

        <label htmlFor="Name">Name</label>
        <C.InputText
          type="text"
          name="name"
          id="name"
          placeholder="e.g John McGold"
        />

        <label htmlFor="email">Email</label>
        <C.InputText
          type="email"
          name="email"
          id="email"
          placeholder="e.g john@fastfeet.com"
        />
      </C.FormBody>
    </C.FormCustom>
  );
}

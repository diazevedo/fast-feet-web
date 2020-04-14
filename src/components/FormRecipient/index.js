/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';
import color from '~/styles/colors';

import * as C from './styles';
import PageTitle from '~/components/PageTitle';
import ButtonIcon from '~/components/ButtonIcon';

export default function FormCourier({
  handleSubmit,
  title,
  onClickButtonBack,
  initialData = {},
}) {
  return (
    <C.FormCustom onSubmit={handleSubmit} initialData={initialData}>
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
        <label htmlFor="Name">Name</label>
        <C.InputText
          type="text"
          name="name"
          id="name"
          placeholder="e.g John McGold"
        />

        <label htmlFor="street">street</label>
        <C.InputText
          type="street"
          name="street"
          id="street"
          placeholder="e.g Liverpool"
        />

        <label htmlFor="number">Number</label>
        <C.InputText
          type="number"
          name="number"
          id="number"
          placeholder="e.g Liverpool"
        />

        <label htmlFor="complement">Complement</label>
        <C.InputText
          type="text"
          name="complement"
          id="complement"
          placeholder="e.g Liverpool"
        />

        <label htmlFor="city">city</label>
        <C.InputText
          type="text"
          name="city"
          id="city"
          placeholder="e.g Manchester"
        />
        <label htmlFor="state">state</label>
        <C.InputText
          type="text"
          name="state"
          id="state"
          placeholder="e.g Liverpool"
        />
        <label htmlFor="post_code">post_code</label>
        <C.InputText
          type="post_code"
          name="post_code"
          id="post_code"
          placeholder="e.g 2020"
        />
      </C.FormBody>
    </C.FormCustom>
  );
}

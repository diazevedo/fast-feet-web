/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from '~/store/modules/auth/actions';
import schema from './schema';

import logo from '~/assets/images/logo.png';

import * as C from './styles';

export default function Login() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const handleSubmitForm = ({ email, password }) => {
    dispatch(signInRequest(email, password));
  };

  return (
    <C.Main>
      <C.Img src={logo} alt="Fast Feet logo" />

      <Form onSubmit={handleSubmitForm} schema={schema}>
        <C.Label htmlFor="form__email">your e-mail</C.Label>
        <Input
          type="email"
          name="email"
          id="form__email"
          placeholder="exemplo@email.com"
          formNoValidate
        />

        <C.Label htmlFor="form__password">your password</C.Label>
        <Input
          type="password"
          name="password"
          id="form__password"
          placeholder="*************"
        />

        <C.Button type="submit"> {loading ? 'loading' : 'login'}</C.Button>
      </Form>
    </C.Main>
  );
}

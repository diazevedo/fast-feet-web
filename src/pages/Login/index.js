/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import Logo from '~/assests/images/logo.png';

import * as C from './styles';

export default function Login() {
  return (
    <C.Container>
      <C.Main>
        <C.Img src={Logo} alt="" srcSet="" />
        <C.Form>
          <C.Label htmlFor="form__email">your e-mail</C.Label>
          <C.Input
            type="email"
            name="user_email"
            id="form__email"
            placeholder="exemplo@email.com"
          />

          <C.Label htmlFor="form__password">your password</C.Label>
          <C.Input
            type="password"
            name="password"
            id="form__password"
            placeholder="*************"
          />

          <C.Button>login</C.Button>
        </C.Form>
      </C.Main>
    </C.Container>
  );
}

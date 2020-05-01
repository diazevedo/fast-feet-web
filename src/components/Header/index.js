import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import * as C from './styles';
import logo from '~/assets/images/header-logo.png';

const menus = [
  { text: 'parcel', path: '/parcel' },
  { text: 'couriers', path: '/courier' },
  { text: 'recipients', path: '/recipient' },
  { text: 'issues', path: '/issues' },
];

export default function Header() {
  const dispatch = useDispatch();

  const user = useSelector((state) => {
    return state.user.profile;
  });

  const handleLogout = () => {
    dispatch(signOut());
  };

  return (
    <C.Header>
      <C.Navigation>
        <NavLink to="/">
          <img src={logo} alt="Fast Feet logo" />
        </NavLink>

        <ul>
          {menus.map(({ text, path }) => (
            <C.MenuItem key={text}>
              <NavLink
                activeStyle={{
                  fontWeight: 'bold',
                  color: 'black',
                }}
                to={path}
              >
                {text}
              </NavLink>
            </C.MenuItem>
          ))}
        </ul>
      </C.Navigation>
      <C.User>
        <p>{user.name}</p>
        <button type="button" onClick={handleLogout}>
          logout
        </button>
      </C.User>
    </C.Header>
  );
}

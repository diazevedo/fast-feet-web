import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import * as C from './styles';
import logo from '~/assets/images/header-logo.png';

const menus = [
  { text: 'parcel', path: '/' },
  { text: 'couriers', path: '/courier' },
  { text: 'recipients', path: 'recipient' },
  { text: 'issues', path: 'issues' },
];

export default function Header() {
  const [active, setActive] = useState('parcel');

  const dispatch = useDispatch();

  const user = useSelector((state) => {
    return state.user.profile;
  });

  const handleMenuClick = (text) => setActive(text);

  const handleLogout = () => {
    dispatch(signOut());
  };

  return (
    <C.Header>
      <C.Navigation>
        <Link to="/">
          <img src={logo} alt="Fast Feet logo" />
        </Link>

        <ul>
          {menus.map(({ text, path }) => (
            <C.MenuItem
              active={active === text ? 1 : 0}
              key={text}
              onClick={() => handleMenuClick(text)}
            >
              <Link to={path}>{text}</Link>
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

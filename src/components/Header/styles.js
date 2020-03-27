import styled from 'styled-components';

import color from '~/styles/colors';

export const Header = styled.header`
  width: 100%;
  max-width: 1440px;
  height: 64px;
  padding: 10px 32px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;

  background: ${color.fourth};

  nav {
    width: 670px;
    display: flex;
    align-items: center;

    img {
      width: 135px;
      height: 26px;
    }

    ul {
      width: 700px;
      text-transform: uppercase;
      display: flex;
      /* justify-content: space-between; */
      align-items: center;

      &::before {
        content: '';
        height: 32px;
        margin: 0 32px;
        border: 0.5px solid ${color.third};
      }
    }
  }

  div {
    text-align: right;
    font-size: 14px;

    p {
      color: ${color.fifth};
      font-weight: bold;
    }

    button {
      text-transform: capitalize;
      color: ${color.alert};
    }
  }
`;

export const MenuItem = styled.li`
  font-size: 15px;
  font-weight: ${(props) => (props.active === 1 ? 'bold' : '400')};
  margin-right: 22px;

  a {
    color: ${(props) => (props.active === 1 ? color.fifth : color.second)};
  }
`;

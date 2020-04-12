import styled from 'styled-components';

import color from '~/styles/colors';

export const Header = styled.header`
  width: 100%;
  max-width: 1440px;
  padding: 10px 32px;
  background: ${color.fourth};

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const Navigation = styled.nav`
  @media (min-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 135px;
  }

  ul {
    text-transform: uppercase;

    @media (min-width: 475px) {
      display: flex;
      justify-content: space-between;
      margin: 20px 0;
    }

    @media (min-width: 700px) {
      &::before {
        content: '';
        height: 32px;
        margin: 0 32px;
        border: 0.5px solid ${color.third};
      }
    }
  }
`;

export const User = styled.div`
  font-size: 14px;
  text-align: center;

  p {
    color: ${color.fifth};
    font-weight: bold;
  }

  button {
    text-transform: capitalize;
    color: ${color.alert};
  }
`;

export const MenuItem = styled.li`
  font-size: 15px;
  font-weight: ${(props) => (props.active === 1 ? 'bold' : '400')};
  padding-right: 25px;

  a {
    color: ${(props) => (props.active === 1 ? color.fifth : color.second)};
  }
`;

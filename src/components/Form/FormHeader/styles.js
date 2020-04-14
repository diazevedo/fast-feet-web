import styled from 'styled-components';
import color from '~/styles/colors';

export const Header = styled.header`
  background: #f5f5f5;
  padding-bottom: 20px;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
  flex-wrap: wrap;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  }

  h1 {
    text-align: center;
  }
`;

export const WrapperButtton = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    width: 45%;
    min-width: 112px;
    height: 50px;
    background: ${color.second};
    margin: 10px 0;

    @media (min-width: 600px) {
      height: 36px;
      font-size: 14px;
      margin: 0;
    }

    &:last-of-type {
      background: ${color.primary};
      margin-left: 20px;
    }
  }
`;

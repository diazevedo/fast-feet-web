import styled from 'styled-components';
import { Form, Input } from '@rocketseat/unform';
import color from '~/styles/colors';

export const Main = styled.div`
  width: 100vw;
  max-width: 900px;
  margin: 20px auto;
  padding: 0px 30px;
`;

export const FormCustom = styled(Form)`
  min-width: 100%;
  position: relative;
  height: 450px;

  label {
    display: block;
    font-size: 14px;
    font-weight: bold;
    color: ${color.fifth};
    margin: 10px 0;
  }

  > span {
    color: #db7272;
    display: inline-block;
    margin-top: 5px;
  }
`;

export const Header = styled.header`
  @media (min-width: 475px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    text-align: center;
  }
`;

export const WrapperButtton = styled.div`
  @media (min-width: 475px) {
    display: flex;
  }

  button {
    width: 100%;
    height: 55px;
    background: ${color.second};
    margin: 10px 0;

    @media (min-width: 475px) {
      margin: 0;
      width: 112px;
      height: 36px;
      font-size: 14px;
    }

    &:last-of-type {
      background: ${color.primary};
      position: absolute;
      bottom: 0;

      @media (min-width: 475px) {
        position: relative;
        margin-left: 20px;
      }
    }
  }
`;

export const WrapperSelectGroup = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const InputText = styled(Input)`
  width: 100%;
  height: 50px;
  font-size: 14px;
  border: 1px solid ${color.third};
  border-radius: 4px;
  font-size: 16px;
  padding-left: 15px;
  color: ${color.fifth};

  &::placeholder {
    font-size: 14px;
    font-weight: normal;
  }
`;

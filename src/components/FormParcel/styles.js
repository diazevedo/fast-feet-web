import styled from 'styled-components';

import { Form, Input } from '@rocketseat/unform';
import color from '~/styles/colors';

export const FormCustom = styled(Form)`
  min-width: 100%;
  position: relative;
  height: 550px;

  padding: 20px;

  label {
    display: block;
    font-size: 14px;
    font-weight: bold;
    color: ${color.fifth};
    margin: 10px 0;
    width: 100%;
  }

  > span {
    color: #db7272;
    display: inline-block;
    margin-top: 5px;
  }
`;

export const Header = styled.header`
  background: #f5f5f5;
  padding-bottom: 20px;

  @media (min-width: 490px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  h1 {
    text-align: center;
  }
`;

export const WrapperButtton = styled.div`
  /* width: 400px; */
  @media (min-width: 490px) {
    display: flex;
  }

  button {
    width: 100%;
    height: 55px;
    background: ${color.second};
    margin: 10px 0;

    @media (min-width: 490px) {
      margin: 0;
      width: 112px;
      height: 36px;
      font-size: 14px;
    }

    &:last-of-type {
      background: ${color.primary};
      position: absolute;
      bottom: 0;
      width: 90%;

      @media (min-width: 490px) {
        width: 112px;
        position: relative;
        margin-left: 20px;
      }
    }
  }
`;

export const FormBody = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 10px 25px 25px;
  height: 320px;

  @media (min-width: 490px) {
    height: auto;
  }

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const WrapperSelectGroup = styled.div`
  width: 100%;

  @media (min-width: 1000px) {
    width: 48%;
  }
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
  flex: 1;

  &::placeholder {
    font-size: 14px;
    font-weight: normal;
  }
`;

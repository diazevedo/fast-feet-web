import styled from 'styled-components';
import { Form, Input } from '@rocketseat/unform';
import color from '~/styles/colors';

export const Main = styled.div`
  width: 100vw;
  max-width: 900px;
  margin: 20px auto;
  padding: 0px 30px;

  h1 {
    color: ${color.fifth};
    text-align: center;
    background-color: yellowgreen;

    @media (min-width: 475px) {
      float: left;
      background-color: green;
    }
  }
`;

export const FormCustom = styled(Form)`
    min-width: 100%;
    /* clear: both; */
    /* background: ${color.fourth}; */

    /* padding: 22px 30px; */

    label {
      display: block;
      font-size: 14px;
      font-weight: bold;
      color: ${color.fifth};
      margin-bottom: 5px;
    }

    button {
      width: 100%;
      background: ${color.second};
      margin: 10px 0;

      &:last-of-type {
        background: ${color.primary};
      }

      @media (min-width: 475px) {
        float: right;
        /* background-color: green; */
       }
  }
`;

export const WrapperSelectGroup = styled.div`
  width: 100%;
  /* height: 100px; */
  /* display: flex; */
  /* justify-content: space-between; */
`;

export const WrapperSelect = styled.div`
  background-color: red;
  height: 45px;
`;

export const InputText = styled(Input)`
  width: 100%;
  height: 45px;
  font-size: 14px;
  border: 1px solid ${color.third};
  border-radius: 4px;
  font-size: 16px;
  line-height: 45px;
  padding-left: 15px;
  color: ${color.fifth};

  &::placeholder {
    font-size: 14px;
    font-weight: normal;
  }
`;

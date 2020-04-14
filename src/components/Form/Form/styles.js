import styled from 'styled-components';
import { Form } from '@unform/web';
import color from '~/styles/colors';

export const FormCustom = styled(Form)`
  min-width: 100%;
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

import styled from 'styled-components';

// import { Input } from '@rocketseat/unform';
import color from '~/styles/colors';

export const Input = styled.input`
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

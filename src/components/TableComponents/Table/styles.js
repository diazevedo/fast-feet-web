import styled from 'styled-components';
import color from '~/styles/colors';

export const Table = styled.table`
  width: 100%;
  text-align: left;
  font-size: 16px;
  border-collapse: separate;
  border-spacing: 0px 15px;

  tbody tr {
    background: ${color.fourth};
  }
`;

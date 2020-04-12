import styled from 'styled-components';
import color from '~/styles/colors';

export const TD = styled.td`
  display: ${(props) => (props.showMobile === 0 ? 'none' : 'table-cell')};
  vertical-align: middle;

  @media (min-width: 700px) {
    display: table-cell;
  }

  font-size: 14px;
  color: ${color.second};
  padding: 10px 0;
  padding-left: 25px;
  text-transform: capitalize;

  &:last-child {
    text-align: right;
    padding-right: 25px;
  }
`;

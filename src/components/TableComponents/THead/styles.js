import styled, { css } from 'styled-components';
import color from '~/styles/colors';

export const TH = styled.th`
  padding-left: 25px;
  color: ${color.fifth};
  font-weight: 700;

  ${(props) =>
    props.showMobile === 0 &&
    css`
      display: none;

      @media (min-width: 700px) {
        display: table-cell;
      }
    `}

  &:last-child {
    text-align: right;
    padding-right: 10px;
  }
`;

import styled from 'styled-components';
import color from '~/styles/colors';

export const TBody = styled.tbody`
  tr td {
    font-size: 14px;
    color: ${color.second};
    padding: 14px 0;
    padding-left: 25px;
    text-transform: capitalize;

    &:last-child {
      text-align: center;
      padding-right: 12px;

      @media (min-width: 700px) {
        padding-right: 0px;
      }
    }

    button {
      height: 100%;
      padding-top: 2px;
      position: relative;

      svg {
        position: absolute;
        top: 50%;
        transform: translateY(-60%);
      }
    }
  }
`;

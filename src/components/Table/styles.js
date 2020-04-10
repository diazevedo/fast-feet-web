import styled, { css } from 'styled-components';
import color from '~/styles/colors';
import statusStyles from '~/styles/statusColors';

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

export const Status = styled.span`
  width: max-content;
  padding: 3px 8px;
  border-radius: 12px;

  background: ${(props) => statusStyles[props.status].background};
  color: ${(props) => statusStyles[props.status].color};

  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  text-indent: -9999px;

  @media (min-width: 700px) {
    text-indent: inherit;
  }

  &:before {
    content: '';
    height: 9px;
    width: 9px;

    background-color: ${(props) => statusStyles[props.status].color};
    display: inline-block;
    border-radius: 50%;

    @media (min-width: 700px) {
      margin-right: 5px;
    }
  }
`;

export const TdNonMobile = styled.td`
  display: none;

  @media (min-width: 700px) {
    display: table-cell;
  }
`;

export const WrapperImageTd = styled.div`
  display: flex;
  position: relative;

  span {
    margin-left: 0px;

    @media (min-width: 700px) {
      display: initial;
      margin-left: 40px;
    }
  }

  img {
    display: none;

    width: 35px;
    height: 35px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;

    @media (min-width: 700px) {
      display: inherit;
    }
  }
`;

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
    text-align: center;
    padding-right: 20px;
  }
`;

import styled from 'styled-components';
import color from '~/styles/colors';

export const Table = styled.table`
  width: 100%;
  text-align: left;
  font-size: 16px;
  border-collapse: separate;
  border-spacing: 0px 15px;

  thead tr th {
    padding-left: 25px;
    color: ${color.fifth};
    font-weight: 700;

    &:last-child {
      text-align: center;
    }
  }

  tbody tr {
    background: ${color.fourth};
  }

  tbody tr td {
    font-size: 14px;
    color: ${color.second};
    padding: 14px 0;
    padding-left: 25px;
    text-transform: capitalize;

    &:last-child {
      text-align: center;
    }

    > span {
      width: max-content;
      padding: 3px 8px;
      border-radius: 12px;
      background: #dff0df;
      color: #2ca42b;
      font-weight: 700;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &:before {
        content: '';
        height: 9px;
        width: 9px;
        margin-right: 5px;
        background-color: #2ca42b;
        display: inline-block;
        border-radius: 50%;
      }
    }

    div {
      position: relative;

      span {
        margin-left: 35px;
      }

      img {
        position: absolute;

        width: 30px;
        height: 30px;
        top: 50%;
        transform: translateY(-50%);

        border-radius: 50%;
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

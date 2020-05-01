import styled from 'styled-components';

export const WrapperButtons = styled.div`
  padding: 20px 0;

  & > * {
    width: 100%;
    margin-bottom: 20px;
  }

  input {
    font-size: 20px;
  }

  @media (min-width: 700px) {
    & > div {
      width: 240px;
      float: left;

      input {
        font-size: 14px;
      }
    }

    button {
      width: 142px;
      font-size: 14px;
      float: right;
    }
  }
`;

export const WrapperImageTd = styled.div`
  display: flex;
  align-items: center;
`;

export const CourierName = styled.span`
  margin-left: 5px;
`;

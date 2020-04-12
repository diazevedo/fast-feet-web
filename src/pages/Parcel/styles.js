import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 42px 40px;
`;

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
  position: relative;
  align-items: baseline;

  span {
    margin-left: 5px;

    @media (min-width: 700px) {
      display: initial;
      margin-left: 40px;
    }
  }
`;

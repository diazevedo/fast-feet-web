import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  /* height: min-content; */
`;

export const WrapperButtons = styled.div`
  padding: 30px 0 10px;
  display: flex;
  flex-direction: column;

  & > * {
    width: 100%;
  }

  & > div {
    margin-bottom: 20px;
  }

  input {
    font-size: 20px;
  }

  button {
    width: 100%;
    font-size: 14px;
  }

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;

    & > div {
      width: 240px;
      margin-bottom: 00px;

      input {
        font-size: 14px;
      }
    }

    button {
      width: 142px;
      font-size: 14px;
    }
  }
`;

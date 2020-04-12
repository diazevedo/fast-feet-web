import styled from 'styled-components';

export const Main = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 42px 40px;

  table {
    margin-top: 10px;
  }
`;

export const WrapperImageTd = styled.div`
  display: flex;
  position: relative;
  /* align-items: baseline; */

  img {
    position: relative;
    top: 0;
    transform: translateY(0);
    display: initial;
  }

  span {
    margin-left: 5px;

    @media (min-width: 700px) {
      display: initial;
      margin-left: 40px;
    }
  }
`;

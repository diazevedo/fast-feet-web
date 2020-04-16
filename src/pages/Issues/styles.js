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

export const P = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  /* min-width: 100px; */
  width: 40vw;
  /* max-width: 700px; */

  @media (min-width: 500px) {
    width: 50vw;
  }

  @media (min-width: 600px) {
    width: 60vw;
  }

  @media (min-width: 770px) {
    width: 65vw;
  }

  @media (min-width: 900px) {
    width: 70vw;
  }
`;

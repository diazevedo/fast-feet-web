import styled from 'styled-components';

export const Main = styled.main`
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
  width: 40vw;
`;

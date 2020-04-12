import styled from 'styled-components';

export const Container = styled.div`
  /* align-self: center; */
  width: 100%;
  height: 150px;
  width: 150px;
  margin: 0 auto;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      display: block;
      height: 100%;
      width: 100%;
      border-radius: 50%;
      border: 2px dashed #dddddd;
    }

    input {
      display: none;
    }
  }
`;

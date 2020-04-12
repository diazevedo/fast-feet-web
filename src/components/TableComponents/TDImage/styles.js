import styled from 'styled-components';

export const Image = styled.img`
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
`;

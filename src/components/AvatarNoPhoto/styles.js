import styled from 'styled-components';

export const ImageWithInitials = styled.div`
  display: none;

  width: 35px;
  height: 35px;
  position: relative;
  background: #aed4ff;
  border-radius: 50%;

  @media (min-width: 700px) {
    display: inline-block;
  }
`;

export const Initials = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #2a62a2;
`;

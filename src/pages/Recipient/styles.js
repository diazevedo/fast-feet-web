import styled from 'styled-components';

export const WrapperImageTd = styled.div`
  display: flex;
  position: relative;

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

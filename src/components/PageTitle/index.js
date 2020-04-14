import styled from 'styled-components';
import color from '~/styles/colors';

export default styled.h1`
  font-size: 34px;
  font-weight: 700;
  color: ${color.fifth};

  @media (min-width: 600px) {
    font-size: 24px;
  }
`;

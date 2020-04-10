import styled from 'styled-components';
import color from '~/styles/colors';

export const Button = styled.button`
  width: 142px;
  height: 36px;

  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;

  color: ${color.fourth};
  background: ${color.primary};
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  svg,
  span {
    width: auto;
  }

  span {
    margin-left: 5px;
  }
`;

import styled from 'styled-components';
import color from '~/styles/colors';

export const Button = styled.button`
  width: 142px;
  height: 36px;

  font-size: 14px;
  font-weight: bold;
  color: ${color.fourth};
  background: ${color.primary};
  border-radius: 4px;
  padding: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  text-transform: uppercase;
`;

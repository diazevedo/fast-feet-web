import styled from 'styled-components';
import color from '~/styles/colors';

export const Wrapper = styled.div`
  width: 100%;
  height: 36px;
  border: 1px solid ${color.third};
  border-radius: 4px;
  padding: 0 12px;
  font-size: 14px;

  background: ${color.fourth};
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  input {
    flex: 1;
    border: none;
    margin-left: 5px;
    color: ${color.second};
    font-weight: lighter;
  }
`;

import styled from 'styled-components';

import color from '~/styles/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OptionList = styled.ul`
  width: 170px;
  font-size: 16px;

  position: absolute;
  top: 25px;
  display: ${(props) => (props.visible === 1 ? 'block' : 'none')};

  padding: 10px;
  z-index: 2;
  border: 0.5px solid rgba(0, 0, 0, 0.1);

  background: ${color.fourth};
  border-radius: 4px;

  &::before,
  &::after {
    content: '';
    display: block;
    border-style: solid;
    border-width: 0 7px 7px 7px;
    border-color: transparent;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  &::before {
    top: -7px;
    border-bottom-color: rgba(0, 0, 0, 0.5);
  }

  &::after {
    top: -7px;
    border-bottom-color: ${color.fourth};
  }
`;

export const ListItem = styled.li`
  height: 34px;
  display: flex;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.3);
  align-items: center;

  &:last-child {
    border: none;
  }

  > a,
  button {
    color: ${color.second};
    margin-left: 0.75rem;
    font-size: 1rem;
  }
`;

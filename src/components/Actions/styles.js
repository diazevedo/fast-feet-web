import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ul {
    width: 150px;
    font-size: 16px;
    position: absolute;
    top: 25px;
    right: 39px;
    transform: translateX(68%);
    display: ${(props) => (props.visible === 1 ? 'block' : 'none')};

    padding: 10px;
    z-index: 2;
    border: 0.5px solid rgba(0, 0, 0, 0.1);

    background: #fff;
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
      border-bottom-color: #fff;
    }

    li {
      height: 34px;
      display: flex;
      border-bottom: 0.5px solid rgba(0, 0, 0, 0.3);
      align-items: center;

      &:last-child {
        border: none;
      }

      > a,
      button {
        color: #999999;
        margin-left: 10px;
        font-size: 16px;
      }
    }
  }
`;

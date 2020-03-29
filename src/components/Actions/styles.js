import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  ul {
    width: 150px;
    height: 120px;
    font-size: 16px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
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
      border-width: 0 5px 5px 5px;
      border-color: transparent;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    &::before {
      top: -5px;
      border-bottom-color: rgba(0, 0, 0, 0.5);
    }

    &::after {
      top: -5px;
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

      > span {
        margin-left: 10px;
      }
    }
  }
`;

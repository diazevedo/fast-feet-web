import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  button {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 3;
    position: fixed;
    top: 0;
    left: 0;
    cursor: default;
  }
`;

export const Content = styled.div`
  width: 450px;
  height: 350px;

  padding: 20px 20px;
  background: #ffffff;

  z-index: 4;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;

  h3 {
    font-size: 14px;
    color: #444444;
    font-weight: 700;
    line-height: 16px;
    margin-bottom: 5px;
  }

  p {
    font-size: 16px;
    color: #666666;
    font-weight: 300;
    line-height: 27px;

    span {
      font-weight: 700;
    }
  }
`;

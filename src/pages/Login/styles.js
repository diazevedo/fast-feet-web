import styled from 'styled-components';

import color from '~/styles/colors';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${color.primary};
  box-sizing: border-box;
`;

export const Main = styled.main`
  position: absolute;
  background: ${color.fourth};
  width: 360px;
  height: 425px;
  max-height: 425px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 60px 30px;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-around; */
`;

export const Img = styled.img`
  width: 258.86px;
  height: 44px;
  box-sizing: border-box;
  margin-bottom: 2px;
`;

export const Form = styled.form`
  box-sizing: border-box;
  width: 300px;
  margin-top: 20px;
`;

export const Label = styled.label`
  display: block;
  width: 100%;
  text-transform: uppercase;
  margin: 15px 0 10px;
  font-size: 14px;
  font-weight: bold;
  color: ${color.fifth};
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  box-sizing: border-box;
  border: 1px solid ${color.third};
  border-radius: 4px;
  font-size: 16px;
  line-height: 45px;
  padding-left: 15px;

  color: ${color.fifth};

  &::placeholder {
    font-size: 16px;
    color: ${color.fifth};
    font-weight: normal;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 45px;
  border-radius: 4px;
  background: ${color.primary};
  color: ${color.fourth};
  margin-top: 15px;
  text-transform: capitalize;
`;

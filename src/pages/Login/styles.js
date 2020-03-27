import styled from 'styled-components';
import color from '~/styles/colors';

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
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 300px;
    margin-top: 22px;

    input {
      width: 100%;
      height: 45px;
      border: 1px solid ${color.third};
      border-radius: 4px;
      font-size: 16px;
      line-height: 45px;
      padding-left: 15px;
      color: ${color.fifth};

      &::placeholder {
        font-size: 16px;
        font-weight: normal;
      }
    }

    span {
      color: #db7272;
      display: inline-block;
      margin-top: 5px;
    }
  }
`;

export const Img = styled.img`
  width: 260px;
  height: 44px;
`;

export const Label = styled.label`
  display: block;
  width: 50%;
  text-transform: uppercase;
  margin: 15px 0 10px;
  font-size: 14px;
  font-weight: bold;
  color: ${color.fifth};
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

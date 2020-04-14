import styled from 'styled-components';

export const Container = styled.div`
  height: 150px;
  width: 150px;
  margin: 0 auto 30px;

  label {
    overflow: hidden;
    position: relative;
    cursor: pointer;
    display: block;
    width: 150px;
    height: 150px;
    border: 2px dashed #025bbf;
    border-radius: 50%;

    &:hover {
      opacity: 0.7;
    }

    input {
      display: none;
    }
  }
`;

export const AvatarImage = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  background: #ddedff;
`;

export const InsertImage = styled.figure`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  color: #dddddd;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    display: block;
    height: 40px;
    width: 40px;
    background: none;
  }

  figcaption {
    margin-top: 5px;
  }
`;

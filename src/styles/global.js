import { createGlobalStyle } from 'styled-components';
import Reset from 'styled-reset';

import 'react-toastify/dist/ReactToastify.css';

import color from '~/styles/colors';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

  ${Reset}

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    margin: 0;
    height: 100%;
    width: 100%;
    background: ${color.sixth};

  }

  body {
    -webkit-font-smoothing: antialised;
    /* overflow: hidden; */
    /* height: 100%; */
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }
  input {
    -webkit-appearance: none;
  }
  a {
    text-decoration: none;
    -webkit-text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
  }
`;

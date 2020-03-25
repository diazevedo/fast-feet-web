import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Reset from 'styled-reset';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
// import history from './services/history';

const GlobalStyle = createGlobalStyle`
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
  }

  body {
    -webkit-font-smoothing: antialised;
    /* overflow: hidden; */
    /* height: 100%; */
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
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

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;

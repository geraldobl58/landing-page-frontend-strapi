import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyles } from './styles/global';

import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';

import { theme } from './styles/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Home />
    <GlobalStyles />
  </ThemeProvider>,
  document.getElementById('root'),
);

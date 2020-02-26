import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import * as serviceWorker from './serviceWorker';

import theme from './theme'

ReactDOM.render(
<BrowserRouter 
w="100vw">
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Router /> 
 </ThemeProvider>
  </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import * as serviceWorker from './serviceWorker';
import MyProvider from './context'

import theme from './theme'

function WithTheme() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Router />
    </ThemeProvider>
  )
}

function WithContext() {
  return (
    <BrowserRouter>
      <MyProvider>
        <WithTheme />
      </MyProvider>
    </BrowserRouter>
  )
}

ReactDOM.render(<WithContext />, document.getElementById('root'))

/* ReactDOM.render(
<BrowserRouter 
w="100vw">
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Router /> 
 </ThemeProvider>
  </BrowserRouter>, document.getElementById('root')); */

serviceWorker.unregister();

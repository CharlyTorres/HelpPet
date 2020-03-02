import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import * as serviceWorker from './serviceWorker';
import MyProvider from './context'
import mapboxgl from 'mapbox-gl'

import theme from './theme'

mapboxgl.accessToken = 'pk.eyJ1IjoiY3J1dXNoIiwiYSI6ImNrN2FyZ3o2ZTE1cXQzZ28ybW96ZHYzaHUifQ.mdO37dcPxW4TFmaZUyZVfw';

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

serviceWorker.unregister();

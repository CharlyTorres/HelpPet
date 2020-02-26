import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NotFound from './components/404/NotFound.js';
import { ThemeProvider } from "@chakra-ui/core"
import Login from './pages/login'
import Signup from './pages/signup'
import Navbar from './components/NavBar/NavBar';

const Router = () => (
<BrowserRouter>
  <Navbar />
    <ThemeProvider>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route component={NotFound} />
    </Switch>
    </ThemeProvider>
  </BrowserRouter>
);

export default Router;

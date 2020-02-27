import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NotFound from './components/404/NotFound.js';
import { ThemeProvider } from "@chakra-ui/core"
import Login from './pages/login'
import Signup from './pages/signup'
import Navbar from './components/NavBar/NavBar';
import Adopt from './pages/adopt';
import Give from './pages/give';
import Emergency from './pages/emergency';
import Donate from './pages/donate';


const Router = () => (
<BrowserRouter>
  <Navbar />
    <ThemeProvider>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/emergency" component={Emergency} />
      <Route exact path="/adopt" component={Adopt} />
      <Route exact path="/give" component={Give} />
      <Route exact path="/donate" component={Donate} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
    </ThemeProvider>
  </BrowserRouter>
);

export default Router;

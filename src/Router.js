import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SwipeComponent from './components/SwipeComponent';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={LoginForm} title="Plese Login" initial />
        <Scene key="swipe" component={SwipeComponent} title="match" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;

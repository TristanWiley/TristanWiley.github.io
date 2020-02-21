import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Phone from './phone'
import Home from './home'

import Chrome from './chrome'

import '../styles/app.css'

export default function App() {
  return (
    <div>
      <Phone>
        <Route exact path="/chrome" component={Chrome} />
        <Home />
      </Phone>
    </div>
  );
}

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Phone from './phone'
import Home from './home'
import '../styles/app.css'

export default function App() {
  return (
    <div>
      <Phone>
        <Route exact path="/" component={Home} />
      </Phone>
    </div>
  );
}

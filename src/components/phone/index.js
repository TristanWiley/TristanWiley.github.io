import React from 'react';
import { Switch, Route } from 'react-router-dom';
import '../../styles/phone.css'

const Phone = ({ children }) => (
  <div>
    <div className="marvel-device note8">
      <div className="inner" />

      <div className="speaker" />

      <div className="sleep" />
      <div className="volume" />
      <div className="camera" />
      <div className="screen">
        <div className="navbar">
          <i className="material-icons">network_wifi</i>
          <i className="material-icons">network_cell</i>
          <i className="material-icons">battery_full</i>
          <span>12:00</span>
        </div>
        { children }
      </div>
    </div>
  </div>
)

export default Phone
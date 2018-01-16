import React from 'react';
import { Switch, Route } from 'react-router-dom';
import moment from 'moment'

import '../../styles/phone.css'

const Phone = ({ children }) => (
  <div>
    <div className="pixel-device">
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
          <span>{ moment().format("h:mm")}</span>
        </div>
        { children }
        <div className="nav-buttons">
          <div className="buttons">
            <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor" d="M329.6 24c-18.4-32-64.7-32-83.2 0L6.5 440c-18.4 31.9 4.6 72 41.6 72H528c36.9 0 60-40 41.6-72l-240-416z" transform="rotate(-90 288 256)"/>
            </svg>
            <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"/>
            </svg>
            <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Phone
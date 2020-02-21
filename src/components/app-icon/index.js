import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import moment from 'moment'

import '../../styles/app.css'

const AppIcon = ({ name, isFull, onClick }) => (
  <a onClick={onClick}>
    <div className={`app-icon${ !isFull ? " full" : ""} ${name}`}/>
  </a>
)

AppIcon.defaultProps = {
  isFull: true,
  onClick: ()=>{}
}

AppIcon.propTypes = {
  name: PropTypes.string.isRequired,
  isFull: PropTypes.bool,
  onClick: PropTypes.func
}

export default AppIcon
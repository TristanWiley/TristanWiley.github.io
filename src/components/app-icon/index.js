import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import moment from 'moment'

import '../../styles/app.css'

const AppIcon = ({ name, isFull }) => (
  <div className={`app-icon${ !isFull ? " full" : ""} ${name}`}/>
)

AppIcon.defaultProps = {
  isFull: true,
}

AppIcon.propTypes = {
  name: PropTypes.string.isRequired,
  isFull: PropTypes.bool,
}

export default AppIcon
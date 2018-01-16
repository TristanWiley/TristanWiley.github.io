import React from 'react'
import { Switch, Route } from 'react-router-dom'
import moment from 'moment'

import '../../styles/home.css'

const Home = () => (
  <div className="home">
    <p className="date">{moment().format('dddd, MMM D')}</p>
  </div>
)

export default Home
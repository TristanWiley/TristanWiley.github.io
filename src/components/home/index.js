import React from 'react'
import { useHistory } from "react-router-dom";
import moment from 'moment'

import AppIcon from '../app-icon'

import '../../styles/home.css'

const Home = () => {
  const history = useHistory()

  return (
  <div className="home page">
    <p className="date">{moment().format('dddd, MMM D')}</p>
    <div className="bottom-apps">
      <AppIcon name="chrome" onClick={() => history.push('/chrome')} />
      <AppIcon name="phone"/>
      <AppIcon name="youtube" isFull={false}/>
      <AppIcon name="messages"/>
      <AppIcon name="camera"/>
    </div>
  </div>
  )
}

export default Home
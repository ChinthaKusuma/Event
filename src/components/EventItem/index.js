// Write your code here
import {Component} from 'react'

import './index.css'

const EventItem = props => {
  const {item, get1} = props

  const {id, imageUrl, name, location, registrationStatus} = item

  const get = () => {
    get1(registrationStatus)
  }

  return (
    <>
      <li className="li1">
        <button className="btn1" type="button" onClick={get}>
          <img src={imageUrl} alt="event" className="img1" />
        </button>
        <p className="h11">{name}</p>
        <p className="para">{location}</p>
      </li>
    </>
  )
}

export default EventItem

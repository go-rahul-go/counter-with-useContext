import React, { useContext } from 'react'
import "./comp.css"
 import { UserContext } from './Parent';

const Box2 = () => {
  const val=useContext(UserContext)
  return (
    <div className="box">
      <p>{val}</p>
      <p>Value coming from parent</p>
    </div>
  )
}

export default Box2;
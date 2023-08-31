import React,{useContext}from 'react'
import { UserContext } from './Parent'
const Box1 = () => {

    const val=useContext(UserContext);
  return (
    <div className='box'>
        <p>{val}</p>
        <p>Value coming from parent</p>
    </div>
  )
}

export default Box1;
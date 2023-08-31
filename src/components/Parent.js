import React, { useState, createContext } from 'react'
import Box1 from './Box1';
import Box2 from './Box2';
import Box3 from './Box3';
import "./comp.css";
export const UserContext = createContext();
const Parent = () => {
    const [count, setCount] = useState(0)
    function plus(){
        setCount(count+1)
    }
    function minus(){
        if(count>0)
        {
            setCount(count-1)
        }
    }
    return (
        
        <div>
            <div className="parent">
                <h2>Parent</h2>
                <div className="display">{count}</div>
                <div className="buttons">
                    <button onClick={minus}>-</button>
                    <button onClick={plus}>+</button>
                </div>
            </div>
            <UserContext.Provider value={count}>
                <div className="grid-box">
                    <Box1 />
                    <Box2 />
                    <Box3 />
                </div>
            </UserContext.Provider>

        </div>
    )
}

export default Parent;
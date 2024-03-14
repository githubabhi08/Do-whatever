import React, { useContext } from 'react'
import { magic } from './App'
function Jess() {
  const{score,setscore,text,settext}=useContext(magic)
  return (
    <>
    
    
    <button onClick={()=>{settext ('start')}} className='btn btn-warning'>Start</button>
    
    
    
    
    
    
    </>
  )
}

export default Jess
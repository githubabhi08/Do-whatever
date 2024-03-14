import React,{useContext, useState} from 'react'
import {magic} from './App'
function Quiz() {
  const{dns,amt,setamt,data,setdata,text,settext}=useContext(magic)

  const[cost,setcost]=useState(amt)
  const dns2=()=>{
    const copy=[...data]
    let price=cost
    price+=copy[0].love
    setcost(price)
    
  }
                    
  return (
    <>
    
    <button onClick={dns2} className='btn btn-primary'>next func</button>
    <h1>{cost}</h1>
    <h1>{amt}</h1>
    
    
    
    
    
    
    </>
  )
}

export default Quiz





















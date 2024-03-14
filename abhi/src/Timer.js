import React, { useContext } from 'react'
import { magic } from './App'

function Timer() {
  const{amt,setamt,data,setdata,text,settext}=useContext(magic)
  /* const dns=()=>{
    const copy=[...data]
    let amount=amt
    amount+=copy[0].love
    setamt(amount)
  } */


const dns=()=>{
  const copy=[...data]
  setamt(copy[0].love+70)
}


  return (
    <>
    
    
    <button onClick={dns} className='btn btn-primary'>Increment amt</button>
    <h1>{amt}</h1>
    
    <button onClick={()=>{settext('start')}}>Start</button>
    
    </>
  )
}

export default Timer




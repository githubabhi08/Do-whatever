
import React, { useContext, useState } from 'react'
import { magic } from './App'

function Main() {
  const{data,setdata,settext,text,dns,dns2}=useContext(magic)
  const[store,setstore]=useState(data)
  const[wrt,setwrt]=useState('')
  
  const dns5=()=>{
    let rina=store
    rina+=10
    setstore(rina)
    setwrt('U r Awesome Bro')
  }

  const dns9=()=>{
    
    setstore(data)
    setwrt('')
  }


  return (
    <>
    
    <div className='niddle'>
    <button onClick={dns5} className='btn btn-primary'>ADD</button>
    <h1>{wrt}</h1>
      <h1>{store}</h1>
      <button onClick={dns9} className='btn btn-danger'>ADD</button>
    </div>
    
    
    
    
    </>
  )
}

export default Main









    
    
   

    
    
    
    
    
   

import React, {useContext} from 'react'
import {magic} from './App'
function Main() {
  const{settext,data,amount,carter,pic,text,add,sub}=useContext(magic)
  return (
    <>
    
    {
      pic.map((pic)=>{
        return <div className='row'>
          <div className='col-md-4'>
            <img src={pic} className='img-fluid'/>
          </div>
        </div>
      })
    }
    
    
    
    
    
    
    </>
  )
}

export default Main
    
    
   

    
    
    
    
    
   

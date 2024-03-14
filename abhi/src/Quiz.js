import React, { useContext } from 'react'
import {magic} from './App'
function Quiz() {
  const{settext,data,amount,carter,pic,text,add,sub}=useContext(magic)

  return (
    <>
    <button className='btn btn-primary'>{carter}</button>
    <button className='btn btn-primary'>{amount}</button>
    <button onClick={()=>settext('cart')} className='btn btn-primary'>Cart</button>
    
    {
      data.map((val,i)=>{
        return <div className='row'>
          <div className='col-md-4'>
            <img src={val.image} className='img-fluid' />
          </div>
          <div className='col-md-4'>
          <div class="btn-group" role="group" aria-label="Basic example">
  <button onClick={()=>{add (i)}} type="button" class="btn btn-primary">ADD</button>
  <button type="button" class="btn btn-primary">{val.quantity}</button>
  <button onClick={()=>{sub (i)}} type="button" class="btn btn-primary">REMOVE</button>
</div>
          </div>
          <div className='col-md-4'>
            <button className='btn btn-primary'>{val.quantity*val.price}</button>
          </div>
        </div>
      })
    }
    
    
    
    
    
    </>
  )
}

export default Quiz




















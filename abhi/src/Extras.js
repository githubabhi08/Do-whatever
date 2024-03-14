import React, { useContext } from 'react'
import {magic} from './App'
function Extras() {
  const{amount,carter,selectedProductImages,setselectedProductImages,kio,add,data}=useContext(magic)

  


  return (
    <>
    
  
 
    <button className='btn btn-danger'>Total Amount {amount}</button>
    <button className='btn btn-danger'>Total items {carter}</button>
    
    {selectedProductImages.map((image,i) => {
        
        
       return <img  src={image} className='img-fluid' />
        
    })}


       
      
    
    </>
  )
}

export default Extras
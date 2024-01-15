import React, { createContext, useState } from 'react'
import MySwiper from './MySwiper'
import AbhiMart from './AbhiMart'
const magic=createContext()
function Routing() {
  const[next,setnext]=useState('')
  return (
    <>
    
    <magic.Provider value={{next,setnext}}>
 {next=='' && <MySwiper />}
 {next=='mart' && <AbhiMart />}
    </magic.Provider>
    
    
    
    
    
    
    
    
    
    </>
  )
}
export {magic}
export default Routing
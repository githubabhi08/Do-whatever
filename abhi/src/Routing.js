import React, { createContext, useEffect, useState } from 'react'
import Headers from './Headers'
import axios from 'axios'
import Extras from './Extras'
const magic=createContext()
function App() {
  const[meta,setmeta]=useState('')
  const[data,setdata]=useState([])
  const[kio,setkio]=('')
  const[amount,setamount]=useState(0)
  const[carter,setcarter]=useState(0)

  const dns=async(setdata)=>{
    const res= await axios.get(`https://fakestoreapi.com/products`)
    const store= await res.data
    const str= store.map((val)=>({
      ...val,quantity:0,cart:1
    }))
    setdata(str)
  }

  useEffect(()=>{
    dns(setdata)
  },[])

const add=(i)=>{
  const copy=[...data]
  copy[i].quantity++

  /* const imgElement = document.createElement('img')
    imgElement.src = copy[i].image
    imgElement.alt = copy[i].title

    
    document.body.appendChild(imgElement) */
setkio(copy[i].image)
  setdata(copy)

  let amt=amount
  amt+=copy[i].price
  setamount(amt)

  let carts=carter
  carts+=copy[i].cart
  setcarter(carts)





}


const subs=(i)=>{
  const copy=[...data]

  if(copy[i].quantity>0){
    copy[i].quantity--
  setdata(copy)

  let amt=amount
  amt-=copy[i].price
  setamount(amt)

  let carts=carter
  carts-=copy[i].cart
  setcarter(carts)
  }
}

const reset=()=>{
  const copy=[...data]
  const syu=copy.map((val)=>{
    return val.quantity=0
  })
  setdata(copy)
  setamount(0)
  setcarter(0)
}

  return (
    <>
  
   <magic.Provider value={{meta,setmeta,amount,carter,data,kio,setkio}}>
   {meta=='' && <Headers amount={amount} carter={carter} data={data} add={add} subs={subs} reset={reset} meta={meta} setmeta={setmeta} />}
    {meta=='cart' && <Extras />}
   </magic.Provider>


    
    

    
    
    </>
  )
}
export {magic}
export default App
import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import Quiz from './Quiz'
import Main from './Main'
const magic=createContext()
function App() {
  const[data,setdata]=useState([])
  const[amount,setamount]=useState(0)
  const[carter,setcarter]=useState(0)
  const[pic,setpic]=useState([])

  const[text,settext]=useState('')


const dns=async(setdata)=>{
 const reserve=await axios.get(`https://fakestoreapi.com/products`)
 const store=await reserve.data

const str=store.map((val)=>({
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
    setpic([...pic,copy[i].image])
    setdata(copy)
    
    

    let amt=amount
    amt+=copy[i].price
    setamount(amt)


    let carts=carter
    carts+=copy[i].cart
    setcarter(carts)

  }


  const sub=(i)=>{
    const copy=[...data]
   if(copy[i].quantity>0){
    copy[i].quantity--
    setpic([...pic.slice(0, i), ...pic.slice(i + 1)]);
    setdata(copy)

    let amt=amount
    amt-=copy[i].price
    setamount(amt)


    let carts=carter
    carts-=copy[i].cart
    setcarter(carts)
   }
  }


  return (
    <>
    
    
    <magic.Provider value={{settext,data,amount,carter,pic,text,add,sub}}>
   {text=='' && <Quiz />}
   {text=='cart' && <Main />}
    </magic.Provider>
    
    
    
    
    
    
    
    </>
  )
}
export {magic}
export default App





























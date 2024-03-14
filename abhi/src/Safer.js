
/* Ecommerce App.js */

/* import React, { createContext, useEffect, useState } from 'react'
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





  const add = (i) => {
    const copy = [...data];
    copy[i].quantity++;
  
    // Check if the product image is already in the pic state
    if (!pic.includes(copy[i].image)) {
      setpic([...pic, copy[i].image]); // Add the product image to pic state only if it's not already there
    }
  
    setdata(copy);
  
    let amt = amount;
    amt += copy[i].price;
    setamount(amt);
  
    let carts = carter;
    carts += copy[i].cart;
    setcarter(carts);
  };
  



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
    
    
    <magic.Provider value={{settext,data,amount,carter,pic,text,add,sub,setdata}}>
   {text=='' && <Quiz />}
   {text=='cart' && <Main />}
    </magic.Provider>
    
    
    
    
    
    
    
    </>
  )
}
export {magic}
export default App */


















/* import React, { useContext, useState } from 'react'
import {magic} from './App'
import { useStore } from 'react-redux'
function Quiz() {
  const{settext,data,amount,carter,pic,text,add,sub,}=useContext(magic)
  

  const bns=()=>{
    
    settext('cart')

  }


  return (
    <>
    <button className='btn btn-primary'>{carter}</button>
    <button className='btn btn-primary'>{amount}</button>
    <button onClick={()=>{bns()}} className='btn btn-primary'>Cart</button>
    
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

export default Quiz */
















/* import React, {useContext, useState} from 'react'
import {magic} from './App'
function Main() {
  const[car,setcar]=useState(0)
  const[amo,setamo]=useState(0)
   
   
  const{settext,data,amount,carter,pic,text,add,sub,setdata,setcarter,setamount}=useContext(magic)
  const[cost,setcost]=useState(amount) 
  const[sum,setsum]=useState(carter)


 
const plus=(i)=>{
  const copy=[...data]
  copy[i].quantity++
  setdata(copy)

  let money=cost
    money+=copy[i].price
    setcost(money)


    let total=sum
    total+=copy[i].cart
    setsum(total)



}


const plusNot=(i)=>{
  const copy=[...data]
  if(copy[i].quantity>0){
    copy[i].quantity--
  setdata(copy)


  let money=cost
    money-=copy[i].price
    setcost(money)


    let total=sum
    total-=copy[i].cart
    setsum(total)
  }


}


  return (
    <>

    <div className='result'>Your Cart</div>


    <button className='btn btn-primary'>TOTAL BILL : ${cost}</button>
    <button className='btn btn-primary'>TOTAL ITEMS : {sum}</button>
    
    {
      pic.map((pic,i)=>{
        return <div className='row' key={i}>
          <div className='col-md-4'>
            <img src={pic} className='img-fluid'/>
          </div>
         <div className='col-md-4'>
          <button onClick={()=>{plus(i)}} >ADD</button>
          <button>{data[i].quantity}</button>
          <button onClick={()=>{plusNot(i)}} >REMOVE</button>
         </div>

         <div className='col-md-4'>
         <button className='btn btn-primary'>{data[i].quantity*data[i].price}</button>
         </div>
        </div>
      })


    }

   
    
    
    
    
    
    
    </>
  )
}

export default Main */ 

/* finish Ecommerce */











   
  





























/* adds only unique items bt not getting implemented */
/* 
const add = (i) => {
  const copy = [...data];
  const existingItemIndex = copy.findIndex(item => item.id === data[i].id);

  if (existingItemIndex !== -1) {
    // If item already exists in the cart, increase its quantity
    copy[existingItemIndex].quantity++;
  } else {
    // If item doesn't exist in the cart, add it with quantity 1
    copy[i].quantity = 1;
    copy[i].cart = 1;
    // Add the image URL to the pic state
    setpic(prevPic => [...prevPic, copy[i].image]);
  }

  // Update the state with the modified cart
  setdata(copy);

  // Calculate the total amount dynamically based on the updated cart
  const totalAmount = copy.reduce((total, item) => total + (item.quantity * item.price), 0);

  // Update the total amount and number of items in the cart
  setamount(totalAmount);
  setcarter(copy.reduce((total, item) => total + item.quantity, 0));
}; */
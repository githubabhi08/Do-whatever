import React, { createContext, useState } from 'react'

import './App.css'

import Navbar from './Navbar'
import Main from './Main'
import Services from './Services'
import Achieve from './Achieve'
import AbhiMart from './AbhiMart'
import MySwiper from './MySwiper'
import Quiz from './Quiz'
import Todo from './Todo'
import Pages from './Pages'
import Temp from './Temp'
import Testimony from './Testimony'
import Contact from './Contact'
import Footer from './Footer'

/* import ArrowSlider from './ArrowSlider' */


const magic=createContext()
function App() {
  const[data,setdata]=useState('')
  return (
    <>
   

   <magic.Provider value={{data,setdata}}>
     
   {data=='' && <Navbar />}
    {data=='' && <Main />}
    {data=='' && <Services />}
    {data=='' && <Achieve />}
    {data=='' && <MySwiper />}
    {data=='mart' && <AbhiMart />}
    {data=='jesus' && <Quiz />}
    {data=='todo' && <Todo />}
    {data=='pages' && <Pages />}
    {data=='temp' && <Temp />}
    {data=='' && <Testimony />}
    {data=='' && <Contact />}
    {data=='' && <Footer />}
   </magic.Provider>
   
    
    
    </>
  )
}
export {magic}
export default App

















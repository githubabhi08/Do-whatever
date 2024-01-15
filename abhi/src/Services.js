import React,{useContext} from 'react'
import './App.css'
import emoji from './MyImages/emoji.webp'
import project from './MyImages/project.webp'
import {magic} from './App'
function Services() {
  const{data,setdata}=useContext(magic)
  return (
    <>
    
  <div className='spec'>
  <h1>
        My <br /> <span>Specifications</span>
    </h1>
    <p id='add'>lorem ipsum mui viuvb ihgyg uyfd suhc iugfs iugy8s uigyfs <br />utf yf yuf
    tfuh yugg uihuh ihuih jgyi jhb jbhi jkhi jbhb <br /> yg uig ugfb huyf ugf.</p>
    <button>Download CV</button>
  </div>
    
    {/* boxex */}
    
    <div className='boxing'>
        <div className='box1'>
            <h1><i class="fa-solid fa-face-grin-hearts"></i></h1>
            <h1>Design</h1>
            <h3>Amazing <br /><span>UI & UX</span></h3>
        </div>

        <div className='box2'>
            
            <h1>Projects</h1>
            <img src={project} />
        </div>

        <div className='box3'>
            <img src={emoji} />
            <h1>React <br /> Developer</h1>
            {/* <h3>Amazing <br /><span>UI & UX</span></h3> */}
        </div>
    </div>
    
    
    
    
    
    
    
    </>
  )
}

export default Services


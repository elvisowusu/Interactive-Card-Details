import { useEffect, useState } from 'react'
import cardsBack from './assets/bg-card-back.png'
import cardsFront from './assets/bg-card-front.png'
import desktop from './assets/bg-main-desktop.png'
import mobile from './assets/bg-main-mobile.png'
import logo from './assets/card-logo.svg'
import mark from './assets/icon-complete.svg'
import './App.css'

function App() {
  const [screenWidth, setScreenWidth]=useState(window.innerWidth);
  useEffect(()=>{
    const handleResize =()=>{
        setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize',handleResize);
    return ()=>{
      window.removeEventListener('resize',handleResize);
    }
  },[]);

  return (
    <div>
      {screenWidth > 640? (<img src={desktop} alt='destop background'/>):(<img className='w-full' src={mobile} alt='moblie background'/>)}
    
    </div>
  )
}

export default App

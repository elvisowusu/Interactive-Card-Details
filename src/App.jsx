import { useEffect, useReducer, useState} from 'react'
import cardsBack from './assets/bg-card-back.png'
import cardsFront from './assets/bg-card-front.png'
import desktop from './assets/bg-main-desktop.png'
import mobile from './assets/bg-main-mobile.png'
import logo from './assets/card-logo.svg'
import mark from './assets/icon-complete.svg'
import './App.css'

const reducer =(state,action)=>{
  switch(action.type){
    case 'CHANGESCREEN':
      return {...state,screenWidth: window.innerWidth}
    default:
      return state
  }
}

function App() {
  const [state,dispatch]=useReducer(reducer,{screenWidth:window.innerWidth})
  useEffect(()=>{
    const handleResize =()=>{
        dispatch({type:'CHANGESCREEN'});
    }
    window.addEventListener('resize',handleResize);
    return ()=>{
      window.removeEventListener('resize',handleResize);
    }
  },[])

  return (
    <div>
      {state.screenWidth > 640? (<img src={desktop} alt='destop background'/>):(<img className='w-full' src={mobile} alt='moblie background'/>)}
      
    </div>
  )
}

export default App

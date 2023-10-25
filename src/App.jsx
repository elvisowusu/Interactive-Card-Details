import { useEffect, useReducer, useState} from 'react'
import desktop from './assets/bg-main-desktop.png'
import mobile from './assets/bg-main-mobile.png'

import './App.css'
import Cards from './components/Cards'
import Form from './components/Form'

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
    <div className='relative font-SpaceGrotesk bg-green-300 w-[35.5rem] flex flex-col '>
      <div className={`${state.screenWidth >640?"bg-[url('./assets/bg-main-desktop.png')]":"bg-[url('./assets/bg-main-mobile.png')]"} bg-cover h-[23rem] w-[35.5rem]`}></div>
      <Cards/>
      <Form/>
    </div>
  )
}

export default App

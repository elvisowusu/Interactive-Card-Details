import { useEffect, useReducer, useState} from 'react'
import desktop from './assets/bg-main-desktop.png'
import mobile from './assets/bg-main-mobile.png'
import './App.css'
import Cards from './components/Cards'
import Form from './components/Form'
import Completed from './components/Completed'
import ErrorPage from './components/ErrorPage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const reducer =(state,action)=>{
  switch(action.type){
    case 'CHANGESCREEN':
      return {...state,screenWidth: window.innerWidth};
    case 'UPDATE CONTENT':
      return {...state,[action.field]:action.value};
    default:
      return state
  }
}

function App() {
  const [state,dispatch]=useReducer(reducer,{screenWidth:window.innerWidth,name:'JANE APPLEASED',cardNumber:'0000 0000 0000 0000',expDate:'00',year:'00',cvc:'000'})
  useEffect(()=>{
    const handleResize =()=>{
        dispatch({type:'CHANGESCREEN'});
    }
    window.addEventListener('resize',handleResize);
    return ()=>{
      window.removeEventListener('resize',handleResize);
    }
  },[])

  const updateName = (field, value)=>{
    dispatch({type: "UPDATE CONTENT", field, value});
  }


  
  return (
    <div className='relative font-SpaceGrotesk w-[35.5rem] md:w-full flex flex-col md:flex-row md:h-[100vh] xl:gap-[20rem] lg:gap-[14rem] md:gap-[13rem] md:items-center'>
      <div className={`${state.screenWidth >768?"bg-[url('./assets/bg-main-desktop.png')] bg-cover  md:h-[100vh] md:w-[21rem] lg:w-[30rem] xl:w-[35rem]":"bg-[url('./assets/bg-main-mobile.png')]"} bg-cover h-[23rem] w-[35.5rem]`}></div>
      <Cards name={state.name} cardNumber={state.cardNumber} expDate={state.expDate} year={state.year} cvc={state.cvc}/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Form updateContent={updateName}/>}/> 
          <Route path='/Completed' element={<Completed/>}/>
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

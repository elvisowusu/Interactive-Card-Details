import React from "react";
import icon from '../assets/icon-complete.svg'



export default function Completed (){
    return(
        <div className="mt-[8.88rem] px-[1.2rem]">
          <div><img src={icon} alt="" /></div> 
          <h1>THANK YOU </h1>
          <p>We've added your card details</p>
          <button>Continue</button>
        </div>
    )
}
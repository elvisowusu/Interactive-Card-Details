import React from "react";
import icon from '../assets/icon-complete.svg'
import {Link} from 'react-router-dom'


export default function Completed (){
    return(
        <div className="mt-[8.88rem] px-[1.2rem]">
          <div><img src={icon} alt="" /></div> 
          <h1>THANK YOU </h1>
          <p>We've added your card details</p>
          <Link className="text-[1.6rem] md:text-[1rem] h-[4.25rem] md:h-[3rem] rounded-md bg-Verydarkviolet text-white mt-[2.85rem] md:mt-[1.9rem] flex justify-center">
             <button>Continue</button>
          </Link>
        </div>
    )
}